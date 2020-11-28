export const getIconSrc = (iconNumber) => {
    const icon = iconNumber.length === 2 ? iconNumber : `0${iconNumber}`;
    return`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${icon}-s.png`;
};