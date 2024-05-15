
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 ">
            <div className="container mx-auto flex flex-col items-center">
                <nav className="mb-4">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <p className="text-sm">
                    Created by Skand with <FaHeart className="inline text-red-500" /> love
                </p>
            </div>
        </footer>
    );
};

export default Footer;
