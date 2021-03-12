import { Spin, Space } from 'antd';


const Hero = ({ info }) => {
    console.log(info);
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + ' ' + today.getDate();
    return (
        <div className="banner">
            <div className="container">
                {info.isFetched ? (
                    <div className="glass">
                        <h2 className="location-name">{info.data.name}</h2>
                        <span className="current-date">{date}</span>
                        <h2 className="feels">{parseFloat(info.data.main.feels_like - 271).toFixed(1)}&deg;c</h2>
                        <h2 className="avarage">
                            {parseFloat(info.data.main.temp_min - 271).toFixed(1)}&deg;c  /  {parseFloat(info.data.main.temp_max - 271).toFixed(1)}&deg;c
                            </h2>
                        <h2 className="actual_weather">
                        {info.data.weather[0].main}
                        <img src={`https://openweathermap.org/img/w/${info.data.weather[0].icon}.png`} alt="" />
                        
                        </h2>
                        <h2>
                            <span>humidity:    {info.data.main.humidity}⁰ </span>
                        </h2>
                        <h2>Wind: {info.data.wind.deg}⁰  {info.data.wind.speed} m/s</h2>
                    </div>
                ) : (
                        <Space className="spinner" size="middle">
                            <Spin size="large" />
                        </Space>
                    )}
            </div>
        </div>
    )
}

export default Hero
