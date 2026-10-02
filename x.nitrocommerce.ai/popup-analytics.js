;
(function() {
    const currentScript = document.currentScript

    console.log('%c[NitroX Analytics] Script Initialized!', 'background: #222; color: #bada55; padding: 2px 4px; border-radius: 2px;')

    const config = currentScript ? .dataset || {}
    const frontendUrl = config.frontend || 'https://x.nitrocommerce.ai'
    const wizkeEndpoint = config.endpoint || 'https://t.makehook.ws'

    const ALLOWED_ORIGINS = [
        window.location.origin,
        frontendUrl,
        wizkeEndpoint,
        'https://equinox.getnitro.co.in',
        'https://equinox-cc.getnitro.co.in'
    ]

    const ALLOWED_EVENTS = [
        'popup_impression',
        'coupon_copied',
        'form_submit',
        'coupon_code_impression'
    ]

    function handleMessage(event) {
        if (!ALLOWED_ORIGINS.includes(event.origin)) {
            if (event.data && event.data.source === 'popup') {
                console.warn('NitroX Analytics: Message blocked from unauthorized origin:', event.origin, '. Allowed origins:', ALLOWED_ORIGINS)
            }
            return
        }

        const data = event.data

        if (!data || data.source !== 'popup' || !data.event_name) {
            return
        }

        if (!ALLOWED_EVENTS.includes(data.event_name)) {
            console.warn('NitroX Analytics: Event not allowed or unknown:', data.event_name)
            return
        }

        sendAnalyticsEvent(data)
    }

    async function sendAnalyticsEvent(payload) {
        const {
            org_token,
            nitro_id,
            parent_id,
            event_name
        } = payload

        if (!org_token || !nitro_id) {
            console.warn('NitroX Analytics: Missing required fields (org_token, nitro_id)')
            return
        }

        const nitroxId = 'null'
        const url = `${wizkeEndpoint}/jsv1/${org_token}/${parent_id}/${nitro_id}/${nitroxId}/event/${event_name}?_=${Date.now()}`

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Nitro-Id': nitro_id,
                    'X-Organisation': org_token
                },
                body: JSON.stringify(payload),
                keepalive: true
            })

            if (!response.ok) {
                console.error('NitroX Analytics: Failed to send event', event_name, response.status)
            }
        } catch (error) {
            console.error('NitroX Analytics: Error sending event', event_name, error)
        }
    }

    window.addEventListener('message', handleMessage)
})()