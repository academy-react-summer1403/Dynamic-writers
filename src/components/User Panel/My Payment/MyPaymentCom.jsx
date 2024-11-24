import React, { useEffect, useState } from 'react';
import { Pagination } from '@nextui-org/react';
import MyPaymentTable from './Table/MyPaymentTable';
import GetAllPayment from '../../../core/services/api/Payment/GetAllPayment';

const MyReserveCom = () => {
    const [myPayment, setMyPayment] = useState([]); 
    const [currentPageData, setCurrentPageData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [pageNumber, setPageNumber] = useState(1); 
    const itemsPerPage = 5;

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageData(myPayment.slice(startIndex, endIndex));
    }, [pageNumber, myPayment]);

    const getData = async () => {
        setIsLoading(true);
        const data = await GetAllPayment();
        if (data) {
            setMyPayment(data);
        }
        setIsLoading(false);
    };

    return (
        <div className="w-full flex p-2 flex-col gap-3 rounded-2xl" dir="rtl">
            <div className="flex flex-col w-full h-full gap-10">
                <h2 className="text-[28px] font-bold mt-8"> پرداخت های من </h2>
            </div>
            <MyPaymentTable
                MyPayment={currentPageData} 
                isLoading={isLoading}
            />
            <Pagination
                className="w-fit z-0 float-start"
                classNames={{ wrapper: 'bg-white' }}
                dir="ltr"
                onChange={(page) => setPageNumber(page)}
                total={Math.ceil(myPayment.length / itemsPerPage)}
                initialPage={1}
                isCompact
                showControls
            />
        </div>
    );
};

export default MyReserveCom;
