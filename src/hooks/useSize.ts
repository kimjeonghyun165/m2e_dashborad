"use client"
import { useEffect, useState } from "react";

export const useWindowSize = (width: number) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // 화면 너비가 768px보다 작으면 모바일로 판단
            setIsMobile(window.innerWidth < width);
        };

        // 초기화 및 리사이즈 이벤트 리스너 등록
        handleResize();
        window.addEventListener("resize", handleResize);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile;
};
