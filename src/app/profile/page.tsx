import { memo, ReactNode, useState } from "react";
import BongService from "../../services/bong_service";

const page: React.FC<{ children?: ReactNode }> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  // BongService의 현재 숫자 값을 로컬 상태로 저장
  const [value, setValue] = useState(BongService.getInstance().getValue());

  // 버튼을 클릭하면 BongService의 숫자 값을 증가시키고 상태 업데이트
  const handleIncrement = () => {
    const service = BongService.getInstance();
    service.increment(); // 서비스의 숫자 값을 증가
    setValue(service.getValue()); // 증가된 값을 로컬 상태에 반영
  };

  return (
    <div>
      <h1>숫자: {value}</h1>
      <button onClick={handleIncrement}>딸! 깍!</button>
      {children}
    </div>
  );
};


// react memo
const ProfilePage = memo(page);
// set displayName
ProfilePage.displayName = "ProfilePage";
// export
export default ProfilePage;
