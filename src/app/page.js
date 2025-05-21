import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Home Page",
  description: "Welcome to YouthBee",
  keywords: ["Youthbee", "Web Development", "UI/UX"],
  url: "https://yourdomain.com",
  image: "https://i.ibb.co/rRStPmSp/youth-Bee-Logo.png",
});

export default function Home() {
  
  return (
   <div>
    Its home page
   </div>
  );
}
