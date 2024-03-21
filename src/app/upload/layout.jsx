import Navbar from '../../widgets/navbar/ui';

export default function layout({ children }) {
  return (
    <div className='bg-pink h-screen'>
      <Navbar />
      {children}
    </div>
  );
}
