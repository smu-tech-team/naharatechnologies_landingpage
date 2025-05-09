'use client';

import { FaRocket, FaCheckCircle, FaHeart, FaThumbsUp, FaUserFriends, FaLeaf } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { BsGlobe, BsShieldCheck } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import SmileImg from "@/assets/smiley-man.jpg";


export default function AboutPage() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800">
      <Link href="/" className="flex items-center text-sm text-blue-600 hover:underline mb-6">
        <FiArrowLeftCircle className="mr-1" /> Go back home
      </Link>

          <div className="mb-8">
        <Image
          src={SmileImg} 
          alt="About Us Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
        <FaRocket /> About Us
      </h1>

      <p className="text-lg mb-6">
      Nahara Technologies was born from a bold desire — to elevate every brand to a pinnacle where it is not only seen but sought after.
          We exist to unlock global potential for individuals and businesses by crafting solutions that command attention and inspire action.

          We empower brands across the globe through:

          Cutting-edge software solutions

          Impact-driven brand strategies

          Data-backed marketing expertise

          Our mission is simple: to ignite sustainable growth and global relevance for the businesses we serve.

          What We Do
          1. Branding
          We craft unforgettable identities that set you apart. Whether you&apos;re an individual or a business, we design brands that resonate and endure.

          2. Software Solutions
          From websites to mobile apps, we build digital experiences tailored to solve real problems, enhance visibility, and drive sales.

          3. Content Writing
          We tell your story with creativity, clarity, and strategy — because words should work for you, not just fill space.

          4. Marketing
          We don’t just market — we connect. With precise, data-driven strategies, we position your brand in front of the audience that truly matters.

          How We Work
          At Nahara Technologies, we stretch beyond boundaries — from launching promising startups to scaling thriving enterprises.
          We combine creative brilliance with technical expertise to bridge the gap between branding and technology,
          helping businesses stand out and stay relevant.

          Everything we do is anchored on our core values — IDECIA, the six pillars of our culture and commitment:

          Integrity: We do what is right — always.

          Dedication: We pursue excellence with passion and persistence.

          Excellence: We raise the bar — then go beyond it.

          Customer Focus: We value your vision and amplify your voice.

          Innovation: We embrace change, leveraging technology to lead it.

          Accountability: We own outcomes and deliver results you can trust.

          Why Choose Us?
          Because you deserve more than just a service provider — you need a partner.
          One that listens. One that understands. One that delivers.

          At Nahara Technologies, we have the team, the strategy, and the heart to bring your ideas to life.
          Let’s build a future where your brand doesn’t just exist — it thrives.
      </p>

      <ol className="list-decimal list-inside mb-6 text-lg space-y-1">
        <li>Branding</li>
        <li>Software Solutions</li>
        <li>Content Writing</li>
      </ol>

      <div className="mb-8">
        <h2 className="font-semibold text-xl mb-2">What We Work:</h2>
        <p>
          Combine brilliance with technical expertise to bridge the gap between branding and technology,
          crafting solutions that command attention.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="font-semibold text-xl mb-2">Do We Work:</h2>
        <p>
          Because you&apos;re more than just a service provider — you&apos;re a partner.
          At Nahara Technologies, we have the team, the strategy, and the technical expertise to bridge the gap between sound and result.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="p-6 border rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2 font-bold text-blue-600 text-lg">
            <BsShieldCheck /> Mission
          </div>
          <p>
            We empower businesses widely by delivering innovative branding strategies,
            cutting-edge software solutions, and data-driven insights.
          </p>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2 font-bold text-green-600 text-lg">
            <BsGlobe /> Vision
          </div>
          <p>
            To position businesses for global success through strategic branding,
            software solutions, and marketing expertise.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        💡 Our Core Values
      </h2>

      <div className="grid sm:grid-cols-3 gap-6">
        <ValueCard icon={<FaCheckCircle className="text-green-600" />} title="Integrity" text="We pursue excellence with passion." />
        <ValueCard icon={<FaHeart className="text-red-500" />} title="Dedication" text="We are committed to excellence." />
        <ValueCard icon={<FaThumbsUp className="text-blue-500" />} title="Excellence" text="We position businesses for global success." />
        <ValueCard icon={<FaUserFriends className="text-blue-600" />} title="Customer Focus" text="We value your vision and amplify it." />
        <ValueCard icon={<BsShieldCheck className="text-blue-500" />} title="Accountability" text="We own our responsibilities." />
        <ValueCard icon={<FaLeaf className="text-green-500" />} title="Innovation" text="We embrace creativity and innovation." />
      </div>
    </div>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ValueCard = ({ icon, title, text }: ValueCardProps) => (
  <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-2 text-lg font-semibold mb-1">
      {icon} {title}
    </div>
    <p>{text}</p>
  </div>
);
