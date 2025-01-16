import Image from "next/image";
import no1 from "../app/img/undraw_mobile-encryption_flk2.png";
import no2 from "../app/img/undraw_real-time-collaboration_g4mc.png";
import no3 from "../app/img/undraw_chatting_2b1g.png";
import no4 from "../app/img/undraw_sharing-articles_agyr.png";

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
              Experience real-time communication like never before. Fast,
              secure, and user-friendly!
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
      <div className="bg-white transform transition-all duration-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl">
        <Image
          src={no2}
          alt="Real-Time Messaging"
          width={96}
          height={96}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Real-Time Messaging</h3>
        <p>Enjoy instant messaging with blazing-fast delivery speeds.</p>
      </div>
      {/* Feature 2 */}
      <div className="bg-white transform transition-all duration-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl">
        <Image
          src={no3}
          alt="Secure Encryption"
          width={96}
          height={96}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
        <p>Collaborate and engage with your team or community.</p>
      </div>
      {/* Feature 3 */}
      <div className="bg-white transform transition-all duration-300 p-6 rounded-lg shadow-lg text-center hover:scale-105 hover:shadow-xl">
        <Image
          src={no4}
          alt="Cross-Platform Support"
          width={96}
          height={96}
          className="mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">File Sharing</h3>
        <p>Easily exchange documents, images, and media.</p>
      </div>
    </div>
  </div>
</section>





 





      <div class="grid  mb-24 gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div class="bg-white shadow-md rounded-lg p-6 max-w-sm border-2 transform transition-all duration-300 hover:scale-105 hover:border-blue-700  hover:shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-800">Standard</h2>
          <p class="mt-2 text-gray-600">1 license for only 1 activation</p>
          <div class="mt-4 flex items-baseline space-x-2">
            <span class="text-gray-400 line-through">$39</span>
            <span class="text-3xl font-bold">$29</span>
          </div>
          <button class="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
          <ul class="mt-4 text-gray-600 space-y-2">
            <li>✔ Lifetime access</li>
            <li>✔ All AI features</li>
            <li>✔ Use your own OpenAI key</li>
          </ul>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 max-w-sm border-2 transform transition-all duration-300 hover:scale-105 hover:border-blue-700  hover:shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-800">Extended</h2>
          <p class="mt-2 text-gray-600">1 license for up to 3 activations</p>
          <div class="mt-4 flex items-baseline space-x-2">
            <span class="text-gray-400 line-through">$59</span>
            <span class="text-3xl font-bold">$39</span>
          </div>
          <button class="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
          <ul class="mt-4 text-gray-600 space-y-2">
            <li>✔ Lifetime access</li>
            <li>✔ All AI features</li>
            <li>✔ Use your own OpenAI key</li>
          </ul>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 max-w-sm border-2 transform transition-all duration-300 hover:scale-105 hover:border-blue-700  hover:shadow-lg">
          <h2 class="text-2xl font-semibold text-gray-800">Standard</h2>
          <p class="mt-2 text-gray-600">1 license for only 1 activation</p>
          <div class="mt-4 flex items-baseline space-x-2">
            <span class="text-gray-400 line-through">$39</span>
            <span class="text-3xl font-bold">$29</span>
          </div>
          <button class="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Buy Now
          </button>
          <ul class="mt-4 text-gray-600 space-y-2">
            <li>✔ Lifetime access</li>
            <li>✔ All AI features</li>
            <li>✔ Use your own OpenAI key</li>
          </ul>
        </div>
      </div>







    </main>
  );
}
