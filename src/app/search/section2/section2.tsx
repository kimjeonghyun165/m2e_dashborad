"use client";

import { Spinner } from "@/components/commons/loading/loading";
import { useStoreLink } from "@/store/store";
import { useCallback, useEffect, useState } from "react";
import { KrwLogo } from "../../../../public/svgs/krw";
import { updatePriceData } from "./data";

interface Style {
  text: string;
  klayData: number;
  krwData: number;
  loading: boolean;
}

interface Data {
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  averageKlayPrice: number;
  minKlayPrice: number;
  maxKlayPrice: number;
}

const Style = ({ text, klayData, krwData, loading }: Style) => {
  return (
    <div className="card bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="card-body">
        <div>
          <div className="text-gray-500">{text}</div>
          <div className="flex justify-between mt-6">
            <div className="flex items-center gap-2">
              <KrwLogo />
              <div className="font-semibold text-sm text-end">
                {loading ? (
                  <Spinner />
                ) : (
                  Math.floor(krwData).toLocaleString("en")
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="imgs/klaytn-logo.png" width={20} height={20} />
              <div className="font-semibold text-sm text-end">
                {loading ? (
                  <Spinner />
                ) : (
                  Math.floor(klayData).toLocaleString("en")
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Section2() {
  const [data, setData] = useState<Data>({} as Data);
  const [loading, setLoading] = useState(true);
  const { link } = useStoreLink();

  const fetchDataAndUpdateChart = useCallback(async () => {
    setLoading(true);
    try {
      const data = await updatePriceData(link);
      setData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [link]);

  useEffect(() => {
    fetchDataAndUpdateChart();
  }, [link, fetchDataAndUpdateChart]);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-4 md:flex-row md:gap-4 md:justify-between gap-4">
      <div className="w-full">
        <Style
          text={"거래 최저가"}
          klayData={data.minKlayPrice}
          krwData={data.minPrice}
          loading={loading}
        />
      </div>
      <div className="w-full">
        <Style
          text={"거래 평균가"}
          klayData={data.averageKlayPrice}
          krwData={data.averagePrice}
          loading={loading}
        />
      </div>
      <div className="w-full">
        <Style
          text={"거래 최고가"}
          klayData={data.maxKlayPrice}
          krwData={data.maxPrice}
          loading={loading}
        />
      </div>
    </div>
  );
}
