import CoreValueRow from "@/components/CoreValueRow";
import TitleDescription from "@/components/TitleDescription";
// import { coreValues } from "@/constants";
import Image from "next/image";
import React from "react";
import CoreValue from "@/assets/core-value.png";
import { CheckCircle } from "lucide-react";

const coreValues = [
  {
    title: "Integrity",
    desc: "We do what is right always",
  },
  {
    title: "Dedication",
    desc: "We pursue excellence with passion and persistence",
  },
  {
    title: "Excellence",
    desc: "We raise the bar, then go beyond it.",
  },
  {
    title: "Customer Focus",
    desc: "We value your vision and amplify your voice",
  },
  {
    title: "Innovation",
    desc: "We embrace change, leveraging technology to lead it.",
  },
  {
    title: "Accountability",
    desc: "We own outcomes and deliver results you can trust",
  },
];

const CoreValues = () => {
  return (
		<div className='px-6 py-10 lg:px-[105px]'>
			<div className='container relative'>
				<div className='flex flex-col-reverse lg:flex-row items-center gap-10'>
					<div className='lg:w-1/2 w-full'>
						<h3 className='text-2xl lg:text-3xl font-bold text-gray-800 mb-2'>
							Everything we do is anchored on our core values (IDECIA)
						</h3>
						<p className='text-lg text-gray-500 mb-6'>
							The six pillars of our culture and commitment
						</p>

						<ul className='space-y-6'>
							{coreValues.map((item, index) => (
								<li key={index} className='flex items-start gap-3'>
									<CheckCircle className='text-red-500 mt-1' size={20} />
									<div>
										<h4 className='text-lg font-semibold text-gray-800'>
											{item.title}
										</h4>
										<p className='text-gray-600'>{item.desc}</p>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className='lg:w-1/2 w-full'>
						<Image
							src={CoreValue}
							alt='Core values'
							width={600}
							height={200}
							className='w-full object-cover'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoreValues;
