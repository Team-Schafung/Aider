import { useRoutes } from 'raviger'
import Home from '../screens/Home'
import VisualRoute from './VisualRoute'
import VocalRoute from './VocalRoute'
import AudioRoute from './AudioRoute'
import Settings from '../screens/settings/settings'
import Object from '../screens/visual/detect/Object'
import Text from '../screens/visual/detect/Text'
import NearObject from '../screens/visual/location/NearObject'
import Booking from '../screens/visual/voice/Booking'

import DetectSpeech from '../screens/audio/detectSpeech'
import CustomVibrations from '../screens/audio/CustomVibrations'

import VoiceBox from '../screens/vocal/VoiceBox'

const routes = {
    '/': () => <Home />,
    '/visual': () => <VisualRoute />,
    '/visual/object': () => <Object />,
    '/visual/nearobj': () => <NearObject />,
    '/visual/booking': () => <Booking />,
    '/visual/identifytext': () => <Text />,

    '/speech': () => <VocalRoute />,
    '/speech/voicebox': () => <VoiceBox />,
    
    
    '/audio': () => <AudioRoute />,
    '/audio/speechtotext': () => <DetectSpeech />,
    '/audio/vibrate': () => <CustomVibrations />,
    

    '/settings': () => <Settings />
}

export default function HomeRoute() {
    let route = useRoutes(routes)
    return route
}
  
