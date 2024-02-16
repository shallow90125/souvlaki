import Header from "@/components/Header";
import MyAvatar from "@/components/MyAvatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MyAvatar />
      {children}
    </>
  );
}
