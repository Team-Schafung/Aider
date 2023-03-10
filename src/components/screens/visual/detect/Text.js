import { Link } from "raviger";

export default function Text() {
    return (
        <div>
            Om shri Ganeshaya Namaha: Text
            <div className="flex justify-center items-center">
                <Link style={{
                    backgroundColor: '#000',
                    color: 'white',
                    marginTop: 10,
                    marginBottom: 5,
                    textAlign: 'center',
                    borderRadius: 5, 
                    padding: 10
                }} className="w-2/3" href="/visual">
                    Visual
                </Link>
            </div>
        </div>
    );
}


