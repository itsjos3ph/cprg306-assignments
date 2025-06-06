import Link from "next/link"

export default function Home() {
    return (
        <main>
            <h1 className="ml-15 mt-15 font-bold underline text-3xl">CPRG 306: Web Development 2 - Assignments</h1>
            <br />
            <ul>
                <li><Link className="ml-15 mt-15 hover:underline hover:text-green-200 decoration-emerald-500 text-2xl" href="./week-2">Week 2 Assignment</Link></li>
                <li><Link className="ml-15 mt-15 hover:underline hover:text-green-200 decoration-emerald-500 text-2xl" href="./week-3">Week 3 Assignment</Link></li>
                <li><Link className="ml-15 mt-15 hover:underline hover:text-green-200 decoration-emerald-500 text-2xl" href="./week-4">Week 4 Assignment</Link></li>
                <li><Link className="ml-15 mt-15 hover:underline hover:text-green-200 decoration-emerald-500 text-2xl" href="./week-5">Week 5 Assignment</Link></li>
            </ul>
        </main>
    );
}