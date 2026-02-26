// 👇 ВСТАВЬ СЮДА СВОИ ДАННЫЕ SUPABASE
const SUPABASE_URL = 'https://yxvrudfgpnyahlpbfzru.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4dnJ1ZGZncG55YWhscGJmenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NTczODIsImV4cCI6MjA4NjIzMzM4Mn0.7Si7KmFTTV-DRvP04mj3_rpLgHXSRoa9lrruZZ7IcHg';

const TOKEN_PART1 = '8527717333:';
const TOKEN_PART2 = 'AAGAW36LNt2F7X9JVk_LmuDQXTPKM2WFc0w';
const TELEGRAM_TOKEN = TOKEN_PART1 + TOKEN_PART2;

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 🌍 СЛОВАРЬ ПЕРЕВОДОВ
const translations = {
    ru: {
        hero_title: "Путешествуй по Грузии с комфортом",
        hero_subtitle: "Бронируйте места онлайн. Оплата водителю на месте.",
        label_from: "Откуда",
        label_to: "Куда",
        today: "Дата поездки",
        btn_search: "Найти маршрутку",
        schedule_title: "Ближайшие рейсы",
        about_title: "Забудьте про хаос на вокзале",
        about_text: "SharaGo — это когда ты точно знаешь, что уедешь. Сидя в мягком кресле, а не на табуретке в проходе.",
        about_list_1: "Место — железобетонно твое",
        about_desc_1: "Никто не займет его сумкой, чемоданом или 'братом свата'.",
        about_list_2: "Цена не кусается",
        about_desc_2: "Платишь как местный. Никаких наценок 'для туристов'.",
        about_list_3: "Диспетчер — как мама",
        about_desc_3: "Позвонит, напомнит, встретит и проследит, чтобы вы сели.",
        service_tag: "🚀 Сервис №1 в Грузии",
        stations_title: "Автовокзалы Тбилиси",
        stations_subtitle: "Нажмите, чтобы не искать таксиста",
        st_didube: "Автовокзал Дидубе",
        st_didube_desc: "На Батуми, Казбеги, Кутаиси",
        st_ortachala: "Ортачала",
        st_ortachala_desc: "Международные рейсы",
        st_isani: "Исани",
        st_isani_desc: "Кахетия, Сигнахи",
        st_station: "Вокзальная Площадь",
        st_station_desc: "Ж/Д вокзал",
        footer_desc: "Первый в Грузии сервис, который реально работает. Сделано с любовью, хинкали и хачапури ❤️ 🧀",
        footer_popular: "Популярное",
        footer_contact: "Контакты",
        footer_disp: "Диспетчерская",
        
        // ГОРОДА
        city_any: "Любой",
        city_tbilisi: "Тбилиси",
        city_kutaisi: "Кутаиси",
        city_batumi: "Батуми",
        city_kazbegi: "Казбеги",
        
        status_departed: "Ушел",
        status_closed: "Продажа закрыта",
        btn_select: "Выбрать",
        seats_free: "мест свободно",
        modal_title: "Бронирование",
        modal_seats: "Выберите места",
        option_window: "Хочу у окна (+3₾)",
        modal_route_label: "Маршрут",
        btn_confirm: "Подтвердить бронь",
        btn_processing: "Оформляем...",
        ph_name: "Ваше Имя",
        ph_phone: "Номер телефона",
        alert_success: "Гаумарджос! Бронь принята. Водитель скоро свяжется с вами.",
        
        route_tbi_bat: "Тбилиси - Батуми",
        route_tbi_kut: "Тбилиси - Кутаиси",
        route_tbi_kaz: "Тбилиси - Казбеги",
        
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "Гига",
        driver_mamuka: "Мамука",
        driver_dato: "Дато",
        driver_default_desc: "Отличный водитель. Знает каждую ямку на дороге, с ним вы доедете быстро и безопасно.",
        door: "Дверь",
        modal_selected: "Выбрано:",
        modal_free_leg: "Св.",
        modal_booked_leg: "Зан.",
        
        // ОШИБКИ И ПОИСК
        empty_rides: "На эту дату/маршрут рейсов пока нет 🚐",
        empty_rides_hint: "Попробуйте изменить параметры поиска.",
        alert_same_city: "Брат, пункт отправления и прибытия не могут совпадать!",
        alert_fill_data: "Впиши имя и телефон, брат!",
        alert_short_phone: "Номер телефона слишком короткий, проверь!",
        alert_no_seats: "Выбери хотя бы одно место на схеме!",
        alert_limit: "Больше 5 мест за раз забронировать нельзя!",
        alert_error: "Что-то с интернетом. Попробуй еще раз."
    },
    en: {
        hero_title: "Travel Georgia with Comfort",
        hero_subtitle: "Book seats online. Pay directly to the driver.",
        label_from: "From",
        label_to: "To",
        today: "Date",
        btn_search: "Find Bus",
        schedule_title: "Upcoming Rides",
        about_title: "Stop playing roulette with the bus station",
        about_text: "SharaGo means you know for sure you'll leave. Sitting in a soft chair, not on a stool.",
        about_list_1: "Your seat is 100% yours",
        about_desc_1: "No one will take it with a bag, suitcase, or 'friend'.",
        about_list_2: "Fair price",
        about_desc_2: "Same as for locals. No 'tourist tax'.",
        about_list_3: "Dispatcher cares like a Mom",
        about_desc_3: "Will call, remind, guide, and make sure you get on the bus.",
        service_tag: "🚀 Service #1 in Georgia",
        stations_title: "Tbilisi Bus Stations",
        stations_subtitle: "Click to find locations",
        st_didube: "Didube Bus Station",
        st_didube_desc: "To Batumi, Kazbegi, Kutaisi",
        st_ortachala: "Ortachala Station",
        st_ortachala_desc: "International routes",
        st_isani: "Isani Station",
        st_isani_desc: "Kakheti, Signagi",
        st_station: "Station Square",
        st_station_desc: "Railway Station",
        footer_desc: "The first booking service in Georgia that actually works. Made with love, Khinkali and Khachapuri ❤️ 🧀",
        footer_popular: "Popular",
        footer_contact: "Contact",
        footer_disp: "Dispatcher",
        
        city_any: "Any",
        city_tbilisi: "Tbilisi",
        city_kutaisi: "Kutaisi",
        city_batumi: "Batumi",
        city_kazbegi: "Kazbegi",
        
        status_departed: "Departed",
        status_closed: "Closed",
        btn_select: "Select",
        seats_free: "seats left",
        modal_title: "Booking",
        modal_seats: "Choose seats",
        option_window: "Window seat (+3₾)",
        modal_route_label: "Route",
        btn_confirm: "Confirm Booking",
        btn_processing: "Processing...",
        ph_name: "Your Name",
        ph_phone: "Phone Number",
        alert_success: "Gaumarjos! Booking accepted. The driver will contact you soon.",
        route_tbi_bat: "Tbilisi - Batumi",
        route_tbi_kut: "Tbilisi - Kutaisi",
        route_tbi_kaz: "Tbilisi - Kazbegi",
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "Giga",
        driver_mamuka: "Mamuka",
        driver_dato: "Dato",
        driver_default_desc: "Excellent driver. Knows every bump on the road, you will arrive quickly and safely.",
        door: "Door",
        modal_selected: "Selected:",
        modal_free_leg: "Free",
        modal_booked_leg: "Taken",
        
        // ОШИБКИ И ПОИСК
        empty_rides: "No rides available for this date/route 🚐",
        empty_rides_hint: "Try changing your search parameters.",
        alert_same_city: "Departure and arrival cities cannot be the same!",
        alert_fill_data: "Please enter your name and phone number!",
        alert_short_phone: "The phone number is too short, please check!",
        alert_no_seats: "Please select at least one seat on the map!",
        alert_limit: "You cannot book more than 5 seats at once!",
        alert_error: "Network error. Please try again."
    },
    ka: {
        hero_title: "იმგზავრეთ საქართველოში კომფორტულად",
        hero_subtitle: "დაჯავშნეთ ონლაინ. გადაიხადეთ მძღოლთან.",
        label_from: "საიდან",
        label_to: "სად",
        today: "თარიღი",
        btn_search: "მოძებნა",
        schedule_title: "უახლოესი რეისები",
        about_title: "დაივიწყეთ ქაოსი სადგურებზე",
        about_text: "SharaGo - გარანტირებული მგზავრობა კომფორტულად.",
        about_list_1: "გარანტირებული ადგილი",
        about_desc_1: "თქვენი ადგილი შენახულია და არავინ დაიკავებს.",
        about_list_2: "ფიქსირებული ფასი",
        about_desc_2: "ზუსტად იგივე ფასი, რაც სადგურზე.",
        about_list_3: "დისპეტჩერი დედასავით ზრუნავს",
        about_desc_3: "დაგირეკავთ, შეგახსენებთ და დაგეხმარებათ ჩასხდომაში.",
        service_tag: "🚀 სერვისი №1 საქართველოში",
        stations_title: "თბილისის ავტოსადგურები",
        stations_subtitle: "დააჭირეთ რუკის სანახავად",
        st_didube: "დიდუბის ავტოსადგური",
        st_didube_desc: "ბათუმის, ყაზბეგის, ქუთაისის მიმართულებით",
        st_ortachala: "ორთაჭალა",
        st_ortachala_desc: "საერთაშორისო რეისები",
        st_isani: "ისანი",
        st_isani_desc: "კახეთი, სიღნაღი",
        st_station: "სადგურის მოედანი",
        st_station_desc: "რკინიგზის სადგური",
        footer_desc: "პირველი ჯავშნის სერვისი, რომელიც მუშაობს. დამზადებულია სიყვარულით და ხინკლით ❤️ 🧀",
        footer_popular: "პოპულარული",
        footer_contact: "კონტაქტი",
        footer_disp: "დისპეტჩერი",
        
        city_any: "ნებისმიერი",
        city_tbilisi: "თბილისი",
        city_kutaisi: "ქუთაისი",
        city_batumi: "ბათუმი",
        city_kazbegi: "ყაზბეგი",
        
        status_departed: "გავიდა",
        status_closed: "დახურულია",
        btn_select: "არჩევა",
        seats_free: "ადგილია",
        modal_title: "ჯავშანი",
        modal_seats: "აირჩიეთ ადგილები",
        option_window: "ფანჯარასთან (+3₾)",
        modal_route_label: "მარშრუტი",
        btn_confirm: "დადასტურება",
        btn_processing: "მუშავდება...",
        ph_name: "სახელი",
        ph_phone: "ტელეფონი",
        alert_success: "ჯავშანი მიღებულია! მძღოლი მალე დაგიკავშირდებათ.",
        route_tbi_bat: "თბილისი - ბათუმი",
        route_tbi_kut: "თბილისი - ქუთაისი",
        route_tbi_kaz: "თბილისი - ყაზბეგი",
        car_sprinter: "Mercedes Sprinter",
        car_vito: "Vito VIP",
        car_transit: "Ford Transit",
        driver_giga: "გიგა",
        driver_mamuka: "მამუკა",
        driver_dato: "დათო",
        driver_default_desc: "შესანიშნავი მძღოლი. იცის ყველა ორმო გზაზე, სწრაფად და უსაფრთხოდ იმგზავრებთ.",
        door: "კარი",
        modal_selected: "არჩეულია:",
        modal_free_leg: "თავ.",
        modal_booked_leg: "დაკ.",
        
        // ОШИБКИ И ПОИСК
        empty_rides: "ამ თარიღზე/მარშრუტზე რეისები ჯერ არ არის 🚐",
        empty_rides_hint: "სცადეთ ძიების პარამეტრების შეცვლა.",
        alert_same_city: "გამგზავრების და დანიშნულების ქალაქები არ შეიძლება ემთხვეოდეს!",
        alert_fill_data: "გთხოვთ შეიყვანოთ სახელი და ტელეფონი!",
        alert_short_phone: "ტელეფონის ნომერი ძალიან მოკლეა!",
        alert_no_seats: "გთხოვთ აირჩიოთ მინიმუმ ერთი ადგილი!",
        alert_limit: "ერთდროულად 5 ადგილზე მეტის დაჯავშნა შეუძლებელია!",
        alert_error: "ინტერნეტის შეცდომა. გთხოვთ სცადოთ ხელახლა."
    }
};

const daysMap = {
    ru: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    en: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
    ka: ['კვი', 'ორშ', 'სამ', 'ოთხ', 'ხუთ', 'პარ', 'შაბ']
};

let currentLang = 'ru';
let baseRides = [];
let currentRideId = null;
let datePicker = null; 
let selectedDateIndex = 0; 

function getFormattedDateForIndex(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// --- УМНАЯ ЗАГРУЗКА БАЗЫ (С ФИЛЬТРОМ ГОРОДОВ И ДАТЫ) ---
async function fetchRides() {
    const container = document.getElementById('rides-container');
    container.innerHTML = `<div class="text-center py-20"><i class="fa-solid fa-circle-notch fa-spin text-blue-900 text-3xl"></i></div>`;

    const targetDateStr = getFormattedDateForIndex(selectedDateIndex);
    
    // Считываем то, что сейчас выбрано в выпадающих списках поиска
    const cityFrom = document.getElementById('search-from').value;
    const cityTo = document.getElementById('search-to').value;

    // Базовый запрос: берем все рейсы на выбранную дату
    let query = sb.from('rides')
                  .select('*')
                  .eq('date', targetDateStr);

    // Если клиент выбрал конкретный город отправления — фильтруем по нему
    if (cityFrom !== 'any') {
        query = query.eq('city_from', cityFrom);
    }
    
    // Если клиент выбрал конкретный город прибытия — фильтруем по нему
    if (cityTo !== 'any') {
        query = query.eq('city_to', cityTo);
    }

    // Сортируем по времени
    const { data, error } = await query.order('time', { ascending: true });

    if (error) {
        console.error('Ошибка:', error);
        container.innerHTML = `<div class="text-center py-10 text-red-400">Ошибка загрузки. Возможно нет доступа к БД.</div>`;
        return;
    }

    if (data && data.length > 0) {
        baseRides = data.map(ride => ({
            id: ride.id,
            time: ride.time,
            price: ride.price,
            seats: ride.seats_total,
            booked: ride.seats_booked,
            bookedSeats: ride.booked_seats || [], 
            cityFrom: ride.city_from,
            cityTo: ride.city_to,
            driverKey: ride.driver_key,
            driverDescRu: ride.driver_desc, 
            driverDescEn: ride.driver_desc_en,
            driverDescKa: ride.driver_desc_ka,
            carKey: ride.car_key,
            driverImg: ride.driver_img || "https://randomuser.me/api/portraits/men/32.jpg",
            carImg: ride.car_img || "img/sprinter.webp", 
            telegramId: ride.telegram_id
        }));
        renderRides();
    } else {
        // Красивое переведенное сообщение, если рейсов нет
        container.innerHTML = `
        <div class="text-center py-12 text-gray-400 font-bold bg-white rounded-3xl border border-gray-100 shadow-sm mt-4">
            ${translations[currentLang].empty_rides}<br>
            <span class="text-sm font-normal mt-2 block">${translations[currentLang].empty_rides_hint}</span>
        </div>`;
    }
}

function initCalendar(lang = 'ru') {
    let prevDate = datePicker && datePicker.selectedDates.length > 0 ? datePicker.selectedDates[0] : new Date();
    if (datePicker) { datePicker.destroy(); }
    let fpLocale = lang === 'en' ? 'default' : lang;

    datePicker = flatpickr("#search-date", {
        locale: fpLocale, 
        minDate: "today",
        defaultDate: prevDate, 
        dateFormat: "Y-m-d",
        altInput: true, 
        altFormat: "j F Y", 
        disableMobile: "true", 
        theme: "airbnb"
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-[#1e3a8a]', 'shadow-sm');
        btn.classList.add('text-gray-500');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-500');
        activeBtn.classList.add('bg-white', 'text-[#1e3a8a]', 'shadow-sm');
    }
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    
    document.querySelectorAll('option[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.text = translations[lang][key];
        }
    });
    
    const nameInput = document.getElementById('p-name');
    const phoneInput = document.getElementById('p-phone');
    if(nameInput) nameInput.placeholder = translations[lang].ph_name;
    if(phoneInput) phoneInput.placeholder = translations[lang].ph_phone;
    
    initCalendar(lang);
    initDateTabs(); 
    fetchRides(); // Перезапрашиваем базу, чтобы обновить сообщения об отсутствии рейсов

    if (!document.getElementById('modal').classList.contains('hidden') && currentRideId) {
        const ride = baseRides.find(r => r.id === currentRideId);
        if (ride) renderSeatMap(ride);
    }
}

function updateClock() {
    const clockElement = document.getElementById('live-clock');
    if(clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString('ru-RU');
    }
}
setInterval(updateClock, 1000);

function searchRides() {
    // 1. Проверяем, не выбрал ли клиент один и тот же город
    const cityFrom = document.getElementById('search-from').value;
    const cityTo = document.getElementById('search-to').value;
    
    if (cityFrom !== 'any' && cityFrom === cityTo) {
        alert(translations[currentLang].alert_same_city);
        return;
    }

    // 2. Высчитываем дату для календаря сверху
    const selectedDateStr = document.getElementById('search-date').value;
    const selectedDate = new Date(selectedDateStr);
    const today = new Date();
    today.setHours(0,0,0,0);
    selectedDate.setHours(0,0,0,0);
    
    const diffTime = Math.abs(selectedDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    if (diffDays >= 0 && diffDays < 7) {
        selectedDateIndex = diffDays;
    } else {
        selectedDateIndex = 0; // Если дата слишком далеко, просто кидаем на сегодня (потом можно расширить до месяца)
    }
    
    initDateTabs();
    document.getElementById('schedule').scrollIntoView({ behavior: 'smooth' });
    
    // 3. Запускаем умный поиск (функция fetchRides сама считает города из выпадающих списков)
    fetchRides();
}

function initDateTabs() {
    const tabsContainer = document.getElementById('date-tabs');
    if(!tabsContainer) return;
    
    let htmlContent = '';
    const now = new Date();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(now.getDate() + i);
        let label = daysMap[currentLang][date.getDay()];
        const isActive = i === selectedDateIndex;
        
        const btnClass = isActive 
            ? "bg-[#1e3a8a] text-white shadow-lg border-transparent" 
            : "bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-500";
        
        htmlContent += `
            <button onclick="selectDate(${i})" class="flex-shrink-0 w-20 h-24 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1 ${btnClass}">
                <span class="text-[10px] font-bold uppercase tracking-wider opacity-80">${label}</span>
                <span class="font-extrabold text-2xl leading-none">${date.getDate()}</span>
                <span class="text-[10px] opacity-70 font-medium">${months[date.getMonth()]}</span>
            </button>`;
    }
    tabsContainer.innerHTML = htmlContent;
}

function selectDate(index) {
    selectedDateIndex = index;
    initDateTabs();
    // При клике на вкладку даты - снова идем в базу, сохраняя фильтры городов!
    fetchRides();
}

function renderRides() {
    const container = document.getElementById('rides-container');
    if (baseRides.length === 0) {
        return;
    }

    const now = new Date();
    const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
    
    let ridesHtml = '';

    baseRides.forEach(ride => {
        const cityNameFrom = translations[currentLang]['city_' + ride.cityFrom] || ride.cityFrom;
        const cityNameTo = translations[currentLang]['city_' + ride.cityTo] || ride.cityTo;
        const routeName = `${cityNameFrom} — ${cityNameTo}`; 

        const carName = translations[currentLang][ride.carKey] || ride.carKey;
        const driverName = translations[currentLang][ride.driverKey] || ride.driverKey;
        const stationName = translations[currentLang].st_didube;

        const [rideH, rideM] = ride.time.split(':').map(Number);
        const rideTotalMinutes = rideH * 60 + rideM;
        let status = 'active'; 
        
        if (selectedDateIndex === 0) {
            if (currentTotalMinutes >= rideTotalMinutes) status = 'departed';
            else if (rideTotalMinutes - currentTotalMinutes <= 60) status = 'closed';
        }

        let btnText = translations[currentLang].btn_select;
        let btnClass = "bg-blue-50 text-blue-900 hover:bg-blue-100 hover:shadow-md";
        let btnAction = `onclick="openModal(${ride.id})"`;
        let seatsDisplay = `${ride.seats - ride.bookedSeats.length} ${translations[currentLang].seats_free}`;
        let seatsColor = "text-green-600 bg-green-50 px-2 py-1 rounded-md";

        if (status === 'closed') {
            btnText = translations[currentLang].status_closed;
            btnClass = "bg-gray-100 text-gray-400 cursor-not-allowed";
            btnAction = "";
        } 
        else if (status === 'departed') {
            btnText = translations[currentLang].status_departed;
            btnClass = "bg-gray-100 text-gray-400 cursor-not-allowed";
            btnAction = "";
            seatsDisplay = "—"; 
            seatsColor = "text-gray-400";
        }

        ridesHtml += `
        <div class="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition duration-300 group">
            <div class="flex-grow text-center md:text-left w-full">
                <div class="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span class="text-3xl font-black text-gray-900 tracking-tight">${ride.time}</span>
                    <span class="px-3 py-1 rounded-full text-xs font-bold uppercase bg-blue-100 text-blue-800">SharaGo</span>
                </div>
                <h3 class="font-bold text-xl text-gray-800 mb-1">${routeName}</h3>
                <div class="mb-3 inline-flex items-center gap-2 text-sm text-gray-500">
                    <i class="fa-solid fa-map-pin text-red-500"></i>
                    <span class="font-medium">${stationName}</span>
                </div>
                <div class="flex items-center justify-center md:justify-start gap-3 mt-2 pl-1">
                    <img src="${ride.driverImg}" loading="lazy" class="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="driver">
                    <div class="text-left leading-tight">
                        <p class="text-xs font-bold text-gray-900">${driverName}</p>
                        <p class="text-[10px] text-gray-500 uppercase tracking-wide">${carName}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-row md:flex-col items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                <div class="text-right flex flex-col items-end">
                    <span class="block text-3xl font-black text-gray-900">${ride.price} ₾</span>
                    <span class="block text-xs font-bold mt-1 ${seatsColor}">${seatsDisplay}</span>
                </div>
                <button ${btnAction} class="px-8 py-4 rounded-2xl font-bold transition w-full md:w-auto text-lg ${btnClass}">${btnText}</button>
            </div>
        </div>`;
    });
    
    container.innerHTML = ridesHtml;
}

let currentlySelectedSeats = []; 

function openModal(id) {
    currentRideId = id; 
    const ride = baseRides.find(r => r.id === id);
    if (!ride) return;
    
    const cityNameFrom = translations[currentLang]['city_' + ride.cityFrom] || ride.cityFrom;
    const cityNameTo = translations[currentLang]['city_' + ride.cityTo] || ride.cityTo;
    const routeName = `${cityNameFrom} — ${cityNameTo}`;

    const carName = translations[currentLang][ride.carKey] || ride.carKey;
    const driverName = translations[currentLang][ride.driverKey] || ride.driverKey;
    
    let driverDesc = translations[currentLang].driver_default_desc;
    if (currentLang === 'ru' && ride.driverDescRu) driverDesc = ride.driverDescRu;
    if (currentLang === 'en' && ride.driverDescEn) driverDesc = ride.driverDescEn;
    if (currentLang === 'ka' && ride.driverDescKa) driverDesc = ride.driverDescKa;

    document.getElementById('modal-route').innerText = routeName;
    document.getElementById('modal-time').innerText = ride.time;
    document.getElementById('modal-driver-name').innerText = driverName;
    document.getElementById('modal-driver-desc').innerText = driverDesc; 
    document.getElementById('modal-car-name').innerText = carName;
    document.getElementById('modal-car-img').src = ride.carImg;
    document.getElementById('modal-driver-img').src = ride.driverImg;

    currentlySelectedSeats = [];
    document.getElementById('selected-seats-count').innerText = '0';
    document.getElementById('window-seat').checked = false;
    
    renderSeatMap(ride);
    
    document.getElementById('modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() { 
    document.getElementById('modal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

function renderSeatMap(ride) {
    const container = document.getElementById('seat-map');
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    const finalLayout = [
        'driver', null, 1,    2,    
        'door_row', 
        3,        4,    5,    6,    
        7,        8,    null, 9,    
        10,       11,   null, 12,   
        13,       14,   15,   16    
    ];

    finalLayout.forEach(seatNum => {
        if (seatNum === null) {
            const emptyDiv = document.createElement('div');
            fragment.appendChild(emptyDiv);
            return;
        }

        if (seatNum === 'driver') {
            const driverDiv = document.createElement('div');
            driverDiv.className = "w-full aspect-square flex items-center justify-center";
            driverDiv.innerHTML = '<div class="w-10 h-10 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center text-gray-400 shadow-inner"><i class="fa-solid fa-steering-wheel text-sm"></i></div>';
            fragment.appendChild(driverDiv);
            return;
        }

        if (seatNum === 'door_row') {
            const doorRow = document.createElement('div');
            doorRow.className = "col-span-4 h-10 relative flex items-center justify-end my-1";
            doorRow.innerHTML = `
                <div class="w-2/3 border-b-2 border-dashed border-gray-300/70 mr-2"></div>
                <div class="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider pl-3 pr-2 py-1.5 rounded-l-xl border-y border-l border-blue-200 shadow-sm flex items-center gap-1 absolute -right-[18px] z-10">
                    <span data-lang="door">${translations[currentLang].door}</span> <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            `;
            fragment.appendChild(doorRow);
            return;
        }

        const isBooked = ride.bookedSeats.includes(seatNum);
        const btn = document.createElement('button');
        
        btn.className = `w-full aspect-square rounded-t-xl rounded-b-md font-bold text-sm md:text-base flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm border-b-4 `;
        
        if (isBooked) {
            btn.className += 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed';
        } else {
            btn.className += 'bg-white text-gray-700 border-gray-200 cursor-pointer seat-hover-effect';
            btn.onclick = () => toggleSeat(seatNum, btn);
        }
        
        btn.innerText = seatNum;
        fragment.appendChild(btn);
    });
    container.appendChild(fragment);
}

function toggleSeat(seatNum, btn) {
    const index = currentlySelectedSeats.indexOf(seatNum);
    if (index > -1) {
        currentlySelectedSeats.splice(index, 1);
        btn.classList.remove('bg-[#1e3a8a]', 'text-white', 'border-[#112255]', 'shadow-inner');
        btn.classList.add('bg-white', 'text-gray-700', 'border-gray-200', 'seat-hover-effect');
    } else {
        if (currentlySelectedSeats.length >= 5) {
            alert(translations[currentLang].alert_limit); 
            return;
        }
        currentlySelectedSeats.push(seatNum);
        btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-200', 'seat-hover-effect');
        btn.classList.add('bg-[#1e3a8a]', 'text-white', 'border-[#112255]', 'shadow-inner');
    }
    document.getElementById('selected-seats-count').innerText = currentlySelectedSeats.length;
}

async function confirmBooking() {
    const name = document.getElementById('p-name').value;
    const phone = document.getElementById('p-phone').value;
    const confirmBtn = document.querySelector('button[onclick="confirmBooking()"]');
    const isWindow = document.getElementById('window-seat').checked ? "Да" : "Нет";

    if (!name || !phone) { alert(translations[currentLang].alert_fill_data); return; }
    if (phone.length < 9) { alert(translations[currentLang].alert_short_phone); return; }
    if (currentlySelectedSeats.length === 0) { alert(translations[currentLang].alert_no_seats); return; }
    if (!currentRideId) return;

    const ride = baseRides.find(r => r.id === currentRideId);
    confirmBtn.disabled = true;
    confirmBtn.innerText = translations[currentLang].btn_processing; 

    const newBookedSeats = [...ride.bookedSeats, ...currentlySelectedSeats];
    const newBookedCount = newBookedSeats.length;

    const { error } = await sb
        .from('rides')
        .update({ 
            seats_booked: newBookedCount,
            booked_seats: newBookedSeats 
        })
        .eq('id', currentRideId);

    if (error) {
        console.error("Ошибка БД:", error);
        alert(translations[currentLang].alert_error); 
        confirmBtn.disabled = false;
        confirmBtn.innerText = translations[currentLang].btn_confirm;
        return;
    }

    if (ride.telegramId) {
        const cityNameFromRu = translations['ru']['city_' + ride.cityFrom] || ride.cityFrom;
        const cityNameToRu = translations['ru']['city_' + ride.cityTo] || ride.cityTo;
        const routeTextRu = `${cityNameFromRu} — ${cityNameToRu}`;
        
        const seatsString = currentlySelectedSeats.sort((a,b) => a-b).join(', ');
        
        const targetDateStr = getFormattedDateForIndex(selectedDateIndex);
        const dateHashtag = targetDateStr.replace(/-/g, '_'); 
        
        const msg = `🔔 *НОВЫЙ ЗАКАЗ (SharaGo)*\n\n📅 Дата: ${targetDateStr} #${dateHashtag}\n🚌 Рейс: ${routeTextRu}\n🕒 Время: ${ride.time}\n👤 Пассажир: ${name}\n📞 Тел: ${phone}\n💺 Места: № ${seatsString}\n🪟 У окна: ${isWindow}\n💰 Сумма: ${ride.price * currentlySelectedSeats.length} ₾`;
        
        const replyMarkup = JSON.stringify({
            inline_keyboard: [[ { text: "✅ Взять в работу", callback_data: "process_order" } ]]
        });
        
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${ride.telegramId}&text=${encodeURIComponent(msg)}&parse_mode=Markdown&reply_markup=${encodeURIComponent(replyMarkup)}`;
        
        try {
            await fetch(url);
        } catch (e) {
            console.error("Ошибка Телеграм:", e);
        }
    }

    alert(translations[currentLang].alert_success);
    closeModal();
    fetchRides(); 
    
    document.getElementById('p-name').value = '';
    document.getElementById('p-phone').value = '';
    confirmBtn.disabled = false;
    confirmBtn.innerText = translations[currentLang].btn_confirm;
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    changeLanguage('ru'); 
    fetchRides();
});
