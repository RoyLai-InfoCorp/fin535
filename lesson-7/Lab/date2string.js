const date2string = (date) => {
    const d = new Date(date);
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    return `${yyyy}-${mm}-${dd}`;
};

module.exports = date2string;
