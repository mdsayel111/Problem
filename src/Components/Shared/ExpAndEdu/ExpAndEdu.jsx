const ExpAndEdu = ({ht1, st1, ht2, st2}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 txt-theme">{ht1}</h1>
            <h1 className="text-2xl font-semibold">{ht2}</h1>
            <p className="text-xl">{st1}</p>
            <small className="text-gray-500">{st2}</small>
        </div>
    );
};

export default ExpAndEdu;