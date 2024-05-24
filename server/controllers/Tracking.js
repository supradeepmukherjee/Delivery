import axios from "axios"


const auth = async () => {
    try {
        //input data
        const inputPayload = {
            grant_type: 'client_credentials',
            client_id: process.env.FEDEX_KEY,
            client_secret: process.env.FEDEX_SECRET
        }
        const { data } = await axios.post(`${process.env.FEDEX_URL}/oauth/token`, inputPayload, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        return data
    } catch (err) {
        console.log(err)
        throw new Error('Failed to authenticate with FedEx API')
    }
}

class TrackingController {
    static trackShipment = async (req, res) => {
        try {
            const { access_token } = await auth()
            // input data
            const inputPayload = {
                includeDetailedScans: true,
                trackingInfo: [{ trackingNumberInfo: { trackingNumber: req.body.id } }]
            }
            const headers = {
                'Content-Type': 'application/json',
                'X-locale': 'en-in',
                'Authorization': `Bearer ${access_token}`
            }
            const { data } = await axios.post(`${process.env.FEDEX_URL}/track/v1/trackingnumbers`, inputPayload, { headers })
            res.send(data.output.completeTrackResults[0].trackResults[0].scanEvents.map(({ eventDescription, scanLocation }) => ({
                desc: eventDescription,
                city: scanLocation.city
            })))
        } catch (err) {
            console.log(err)
            res.status(500).send('Something went wrong')
        }
    }
}

export default TrackingController