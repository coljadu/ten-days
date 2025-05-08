import { Link } from "react-router";
const ProjectHome = () => {
    return (
        <>
            <h1 className="text-3xl font-bold">
                Project list
            </h1>
            <ul className="space-y-2">
                <li>
                    <Link
                        to="/project1"
                        className="block px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                    >
                        Project 1
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project2"
                        className="block px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                    >
                        Project 2
                    </Link>
                </li>
                <li>
                    <Link
                        to="/project3"
                        className="block px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
                    >
                        Project 3
                    </Link>
                </li>
            </ul>

        </>
    )
}

export default ProjectHome;