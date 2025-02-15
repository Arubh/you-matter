import { handleLogout } from "@/utils/action";
import Link from "next/link";


export default function Btn({text}) {
  return (
    <div>
      {text==="Logout" ? (
        <form action={handleLogout}>
        <button
          type="submit"
          className="inline-flex h-[50px] pt-[19px] pr-[20px] pb-[20px] pl-[20px] justify-center items-center rounded-[10px] border-[2px] border-solid border-[#0E72E8]
        text-[#0E72E8] hover:bg-[#0E72E8] hover:text-[#F3F3F3] active:bg-[#00489E] active:border-[#00489E] active:text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%]"
        >
          Logout
        </button>
      </form>
      ) : (
        <Link href="/login">
        <button
          type="button"
          className="inline-flex h-[50px] pt-[19px] pr-[20px] pb-[20px] pl-[20px] justify-center items-center rounded-[10px] border-[2px] border-solid border-[#0E72E8]
        text-[#0E72E8] hover:bg-[#0E72E8] hover:text-[#F3F3F3] active:bg-[#00489E] active:border-[#00489E] active:text-[#F3F3F3] text-center text-[16px] font-bold not-italic leading-[150%]"
        >
          Login
        </button>
        </Link>
      )}
    </div>
  )
}
