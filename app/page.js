import Image from "next/image";
import no1 from "../app/img/undraw_mobile-encryption_flk2.png";
export const metadata = {
  title: "Home - Abdullah Chat App",
  description:
    "Stay connected with Abdullah Chat App, a sleek and secure platform for real-time communication. Enjoy instant messaging, responsive design, and seamless user experience.",
};

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
 <section className="bg-gradient-to-r from-slate-700 to-indigo-600 text-white py-20">
 <div className="max-w-7xl sm:flex sm:justify-between items-center mx-auto px-6 sm:px-12 text-center sm:text-left">
   
   {/* Left Content */}
   <div>
     <h1 className="text-4xl md:text-6xl font-bold mb-6">
       Welcome to Abdullah Chat App
     </h1>
     <p className="text-lg md:text-xl mb-8">
       Experience real-time communication like never before. Fast, secure, and user-friendly!
     </p>

     {/* Buttons */}
     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
       <button className="px-6 py-3 bg-yellow-400 text-gray-800 font-medium rounded-md hover:bg-yellow-500">
         Get Started
       </button>
       <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100">
         Learn More
       </button>
     </div>
   </div>

   {/* Right Image */}
   <div className="mt-12 sm:mt-0">
     <Image src={no1} width={500} alt="Chat App Illustration" />
   </div>

 </div>
</section>


      {/* Features Section with Images */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="https://source.unsplash.com/featured/?chat,app"
                alt="Real-Time Messaging"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Messaging
              </h3>
              <p>Enjoy instant messaging with blazing-fast delivery speeds.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="https://source.unsplash.com/featured/?security,encryption"
                alt="Secure Encryption"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Secure Encryption</h3>
              <p>
                Your conversations are protected with end-to-end encryption.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src="https://source.unsplash.com/featured/?devices,cross-platform"
                alt="Cross-Platform Support"
                width={96}
                height={96}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Cross-Platform Support
              </h3>
              <p>Access Abdullah Chat App from any device, anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Free</h3>
              <p className="text-gray-600 mb-6">
                Basic features to get started.
              </p>
              <p className="text-3xl font-bold mb-6">$0/month</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                Choose Free
              </button>
            </div>
            {/* Pro Plan */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-md text-center bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Pro</h3>
              <p className="text-gray-600 mb-6">
                Advanced features for professionals.
              </p>
              <p className="text-3xl font-bold mb-6">$9.99/month</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                Choose Pro
              </button>
            </div>
            {/* Enterprise Plan */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Custom solutions for businesses.
              </p>
              <p className="text-3xl font-bold mb-6">$29.99/month</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start Connecting Today!</h2>
        <p className="mb-8">
          Sign up now and join thousands of users enjoying seamless
          communication.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-gray-800 font-medium rounded-md hover:bg-yellow-500">
          Get Started
        </button>
      </section>
    </main>
  );
}
