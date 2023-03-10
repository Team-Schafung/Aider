import { Link } from "raviger";
export default function CustomVibrations() {
    return (
        <div>
            Om shri Ganeshaya Namaha: CustomVibrations
            <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/audio">
                    Audio
                </Link>
            </div>
        </div>
    );
}


