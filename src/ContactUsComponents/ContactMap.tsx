import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const ContactMap = () => {
  return (
    <div>
        <APIProvider apiKey={'Your API key here'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
                defaultZoom={13}
                defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
                onCameraChanged={ (ev: MapCameraChangedEvent) =>
                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                }>
            </Map>
        </APIProvider>

    </div>
  )
}

export default ContactMap
