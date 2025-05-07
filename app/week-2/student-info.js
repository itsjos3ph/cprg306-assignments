import Link from "next/link";


// This is what will be presented for StudentInfo in week-2/page.js
export default function StudentInfo() {
  return (
    <div>
        {/* MyName and MyGithub are components */}
      <MyName />
      <MyGithub />
    </div>
  );
}

function MyName() {
  return <h1>Joseph Sabo</h1>;
}

function MyGithub() {
  return (
    <Link href="https://github.com/itsjos3ph">Github</Link>
  );
}
