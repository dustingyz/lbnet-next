import Image from "next/image";
import Link from "next/link";
// import { zenKakuGothicNew } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <div className={`HomeMainList max-w-180 flex flex-col items-stretch`}>
          <div className={`font-bold py-10`}>
            <Link href="/post/123" className="underline">
              人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
            </Link>
          </div>
          <div className={`font-bold py-10`}>
            <Link href="/post/markdown" className="underline">
              markdown test 平等で譲ることのでき
            </Link>
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div className={`font-bold py-10`}>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
          <div>
            人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは、世界における自由、正義及び平和の基礎であるので、
          </div>
        </div>
        <nav className="hidden lg:flex lg:fixed w-40 min-w-40 h-full bg-amber-200 lg:ml-184">
          <div className="font-bold ">maybe this will be a navi tag, or just delete it.</div>
        </nav>
      </div>
    </>
  );
}
