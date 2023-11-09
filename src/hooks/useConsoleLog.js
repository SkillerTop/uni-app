import { useEffect } from 'react';

function useConsoleLog(data) {
    useEffect(() => {
        console.log(data);
    }, [data]);
}

export default useConsoleLog;