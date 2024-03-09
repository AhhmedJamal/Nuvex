import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div>
      <Image
        src={"../../../../public/Film rolls-rafiki.svg"}
        alt="photo profile"
        width={200}
        height={100}
        className="w-[40px] h-[40px]"
      />
    </div>
  );
}

export default Profile;
