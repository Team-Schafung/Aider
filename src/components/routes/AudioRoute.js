import useWindowDimensions from "../common/UseWindowDimensions";
import { Link } from 'raviger'

export default function AudioRoute() {

    const { height, width } = useWindowDimensions();
    const componentWidth = width/2 -30;
    const componentHeight = height/2-70;

    return (
        <div style={{height: height-70}} className="w-screen flex-1">
            
            <div className="h-1/2 flex justify-around items-center">
                <Link style={{width: componentWidth, 
                    height: componentHeight, 
                    textAlign: 'center',
                    borderRadius: 10, 
                    borderColor: '#4285F4', 
                    borderWidth: 3,
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingRight: 10
                }} href="/audio/speechtotext">
                    Read what one says
                </Link>
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    textAlign: 'center',
                    borderRadius: 10,
                    borderColor: '#FBBC05', 
                    borderWidth: 3,
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingRight: 10
                }} href="/audio/vibrate">
                        Customize vibrations
                </Link>
            </div>
                
            {/* <div className="h-1/2 flex justify-around items-center">
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    textAlign: 'center',
                    borderRadius: 10, 
                    borderColor: '#EA4335', 
                    borderWidth: 3,
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingRight: 10
                }} href="/audio/booking">
                        Voice based travel booking
                </Link>
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    textAlign: 'center',
                    borderRadius: 10, 
                    borderColor: '#34A853', 
                    borderWidth: 3,
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20,
                    paddingLeft: 10,
                    paddingRight: 10
                }} href="/audio/identifytext">
                        Text identification
                </Link>
            </div> */}

            <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/">
                    Home
                </Link>
            </div>
        </div>
    );
}


