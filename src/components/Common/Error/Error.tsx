import { useNavigate } from "react-router-dom";

const Error = ({ error }: { error: Error }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-9xl font-bold text-red-500 mb-8">
        에러가 생겼습니다
      </h1>
      <p className="text-6xl text-gray-700 mb-8">{error.message}</p>
      <div className="flex space-x-8">
        <button
          onClick={() => navigate(-1)}
          className="px-12 py-6 bg-blue-500 text-white font-bold rounded-lg text-2xl"
        >
          뒤로 가기
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-12 py-6 bg-red-500 text-white font-bold rounded-lg text-2xl"
        >
          홈으로
        </button>
      </div>
    </div>
  );
};

export default Error;
