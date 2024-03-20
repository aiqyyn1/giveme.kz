import Navbar from '../../widgets/navbar/';

export default function layout({ children }) {
  return (
    <div className="bg-pink-50 h-screen">
      <Navbar />
      {/* {children} */}
    </div>
  );
}
