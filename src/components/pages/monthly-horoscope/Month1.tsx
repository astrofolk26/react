import Container from "@/components/layouts/Container";
import Link from "next/link"; // Import Link from next/link


const Month1 = () => {
  return (
    <section className=''>
      <Container width maxWidth><section className="justify-between">
        
          <div className="text-[var(--background)] gap-10 p-5 rounded-md">
            <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                      <Link href="/monthly-aries" >Aries</Link>
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="/monthly-taurus">Taurus</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="/monthly-gemini">Gemini</Link></td>
                        <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">   <Link href="/monthly-cancer">Cancer</Link></td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-leo">Leo</Link>
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-virgo">Virgo</Link></td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-libra">Libra</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-scorpio">Scorpio</Link></td>
                  </tr>
                  <tr className="border-b border-[var(--primary)]">
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]">
                     <Link href="/monthly-sagittarius">Sagittarius</Link>
                    </td>
                    <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-capricorn">Capricorn</Link></td>
                     <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-aquarius">Aquarius</Link></td>
                      <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[25%]"> <Link href="/monthly-pisces">Pisces</Link></td>
                
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </section>
           </Container>
           <Container width maxWidth><section className="justify-between">
      
                  
               <div className="text-[var(--background)] gap-10 p-5 rounded-md">
                 <div className="text-white border border-[var(--primary)] p-1 sm:p-6 mb-6">
                   <table className="">
                     <tbody>
                         <tr className="border-b border-[var(--primary)]">
                        
                         <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[50%]">   Report Price ($)/ (INR) </td>
                             <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[50%]">  Offer Price ($)/ (INR) </td>
                             <td className="py-2 font-bold text-[var(--white)] text-center bg-[var(--primary)]  border-r border-[var(--primary)] w-[20%]">   Book Now</td>
                       </tr>
                       <tr className="border-b border-[var(--primary)]">
                      
                         <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 50/ INR 4100  </td>
                          <td className="py-2 font-bold text-[var(--white)] text-center border-r border-[var(--primary)] w-[50%]">   $ 35/ INR 3100  </td>

                             <td className="font-bold text-[var(--white)] border-[var(--primary)] w-[20%]" style={{ paddingLeft: "1%" }}>   <Link href="/pyp-order"> <input
                           className="font-bold btnLink   disabled:bg-[var(--gray)]"
                           type="button" value="Book Now" /> </Link></td>
                       </tr>
             
                     </tbody>
                   </table>
                 </div>
               </div>
             </section>
                </Container>
            </section>
          )
        }
        
        export default Month1