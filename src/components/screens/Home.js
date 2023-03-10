import useWindowDimensions from "../common/UseWindowDimensions";
import { Link } from 'raviger'

export default function Home() {

    const { height, width } = useWindowDimensions();
    const componentWidth = width/2 -30;
    const componentHeight = height/2-40;

    return (
        <div className="w-screen h-screen flex-1">
            
            <div className="h-1/2 flex justify-around items-center">
                <Link style={{width: componentWidth, 
                    height: componentHeight, 
                    backgroundColor: '#4285F4', 
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: 10, 
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20}} href="/audio">
                    Audio
                </Link>
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    backgroundColor: '#FBBC05', 
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: 10, 
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20}} href="/visual">
                        Visual
                </Link>
            </div>
                
            <div className="h-1/2 flex justify-around items-center">
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    backgroundColor: '#EA4335', 
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: 10, 
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20}} href="/speech">
                        Speech
                </Link>
                <Link style={{
                    width: componentWidth, 
                    height: componentHeight, 
                    backgroundColor: '#34A853', 
                    color: 'white',
                    textAlign: 'center',
                    borderRadius: 10, 
                    paddingTop: componentHeight/2-10, 
                    fontSize: 20}} href="/settings">
                        Settings
                </Link>
            </div>
        </div>
    );
}


