import { GradientText } from 'common/GradientText'
import Image from 'next/image'
import { memo } from 'react'

export const About = memo(function About() {
  return (
    <div className="grid grid-cols-container mt-24 md:mt-52 px-4 md:px-8">
      <div className="grid items-center grid-flow-col gap-y-16 gap-x-40 col-start-2">
        <div className="grid content-start items-start justify-items-start">
          <span className="uppercase text-14 tracking-[0.2em] font-bold text-96a0db">how to get verified</span>

          <GradientText as="h2" className="text-32 md:text-48 font-semibold mt-4">
            What is World ID
          </GradientText>

          <div className="grid gap-y-6 text-18 font-rubik text-bcc5f9 mt-12">
            <p>
              World ID is a decentralized protocol to verify unique humanness. This is done through completely private
              iris imaging with a device called an orb or, for when a weaker protection is needed, using your phone
              number.
            </p>

            <p>
              As a user, you can download the{' '}
              <a
                target="_blank"
                href="https://worldcoin.org/download-app"
                className="text-ffffff font-semibold transition-opacity hover:opacity-80"
              >
                Worldcoin app
              </a>
              , go to an orb and verify your identity once. You can then prove your a unique human to any number of
              apps.
            </p>
          </div>
        </div>

        <div className="box-content relative overflow-clip p-14 bg-111318 border border-ffffff/20 rounded-3xl">
          <Image
            className="absolute bottom-16 -left-5"
            width={384}
            height={171}
            src="/images/home/dots.svg"
            alt="Orb"
          />

          <Image className="absolute top-32 -right-14" width={384} height={171} src="/images/home/dots.svg" alt="Orb" />

          <Image className="min-w-[370px]" width={370} height={484} src="/images/home/about.png" alt="Orb" />
        </div>
      </div>
    </div>
  )
})