const toFormatDate = (unixTime: number) => {
    const ms = unixTime * 1000;
    const date = new Date(ms);
    return date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })
};

export default toFormatDate;