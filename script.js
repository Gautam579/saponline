// Define audio tracks
const audioTracks = {
    track1: new Audio('./Feelings - Vatsala _ Female Version _ Sumit Goswami - Whizz Music Productions (youtube).mp3'),
    track2: new Audio('./Aaj Se Teri - Lyrical _ Padman _ Akshay Kumar _ Radhika Apte _ Arijit Singh _ Amit Trivedi - Zee Music Company (youtube).mp3'),
    track3: new Audio('./Ager Tum Saath ho _ (Slowed+Reverb)  Arjit Singh  _ Ankit music .mp3'),
    track4: new Audio('./Avadh_Mein_Raghurai___Hansraj_Raghuwanshi___Jai_Shree_Ram___Ram_Mandir_Ayodhya_Song2024(48k).mp3'),
    track5: new Audio('./Brothers Anthem Full Video - Akshay Kumar,Sidharth Malhotra_Vishal Dadlani_Ajay-Atul - SonyMusicIndiaVEVO (youtube).mp3'),
    track6: new Audio('./Dekhha Tenu (Full HD Song) _ Mr. _ Mrs. Mahi _ Rajkummar Rao, Janhvi Kapoor _ Mohd. Faiz _ - A to Z Plethora Music (youtube).mp3'),
    track7: new Audio('./Dil Jhoom - Gadar 2 - Arijit Singh - Sunny Deol, Utkarsh Sharma, Simratt K - Mithoon, Sayeed Quadri - Zee Music Company (youtube).mp3'),
    track8: new Audio('./A.R. Rahman - Chale Chalo Best Video_Lagaan_Aamir Khan_Srinivas_Ashutosh Gowariker - SonyMusicIndiaVEVO (youtube).mp3'),
    track9: new Audio('./Full Video_ Chak Lein De _ Chandni Chowk To China _ Akshay Kumar, Deepika Padukone _ Kailash Kher - T-Series (youtube).mp3'),
    track10: new Audio('./Hansraj_Raghuwanshi___Gyanvapi___Shivratri_special_2024___Official_Gyanvapi_ज्ञानवापी__Song(128k).m4a'),
    track11: new Audio('./Heeriye (Official Video) Jasleen Royal ft Arijit Singh_ Dulquer Salmaan_ Aditya Sharma _Taani Tanvir - Jasleen Royal (youtube).mp3'),
    track12: new Audio('./Jai Ho Slumdog Millionaire (Full Song) - T-Series (youtube).mp3'),
    track13: new Audio('./Jogi - Lyrical _Shaadi Mein Zaroor Aana _Rajkummar Rao,Kriti K_Arko ft Aakanksha Sharma - Zee Music Company (youtube).mp3'),
    track14: new Audio('./Kali Kali Zulfon Ke_Madhur Sharma _Nusrat Fateh Ali Khan_[slow+reverb] ll #Lofisong ll Anjali music - Anjali Music (youtube).mp3'),
    track15: new Audio('./Kaun Tujhe __ M.S. Dhoni __ Live Palak Muchhal - Subhamoy Studio (youtube).mp3'),
    track16: new Audio('./Keejo_Kesari_Ke_Laal___Jai_Shree_Ram___Dj_Karan_Kahar_Dj_Dakshraj(48k).mp3'),
    track17: new Audio('./Kesariya _ Raag Band _ Ft _ Reshma Shyam _ Cover _ Arijit Singh _ Brahmastra - Raag Band Music (youtube).mp3'),
    track18: new Audio('./Love Medley - Cover - Raag ft. Reshma Shyam - Afreen - Raabta - O Saathi - Raag Band Music (youtube).mp3'),
    track19: new Audio('./Luka Chuppi- Duniyaa Full Video Song - Kartik Aaryan Kriti Sanon - Akhil - Dhvani B - T-Series (youtube).mp3'),
    track20: new Audio('./Naina jo mile hai sarkar sa.mp3'),
    track21: new Audio('./Naino Ne Baandhi - Lyrical _ Gold _ Akshay Kumar _ Mouni Roy _ Arko - Zee Music Company (youtube).mp3'),
    track22: new Audio('./RAM_KO_DEKH_KAR_SHRI_JANAK_NANDINI__RAM_BHAJAN__SALONI_THAKKAR(48k).mp3'),
    track23: new Audio('./Rama_Rama_ratte_ratte_beet_gai_umriya__slowed___reverb__by_best_Ram_bhajan_2024(48k).mp3'),
    track24: new Audio('./Rama_Rama_ratte_ratte_biti_re_umriya_l__lo-fi_song(48k).mp3'),
    track25: new Audio('./Sultan Title Song - Salman Khan, Anushka Sharma - Sukhwinder Singh, Shadab Faridi, Vishal & Shekhar - YRF (youtube).mp3'),
    track26: new Audio('./Tera Fitoor Lyrical - Genius _ Utkarsh Sharma, Ishita Chauhan _ Arijit Singh _ Himesh Reshammiya - Tips Official (youtube).mp3'),
    track27: new Audio('./Tere Sang Yaara - Rustom _ Akshay Kumar _ Ileana Dcruz _  Arko Ft. Atif Aslam _ Manoj Muntashir - Zee Music Company (youtube).mp3'),
    track28: new Audio('./Tum Se (Song)_ Shahid Kapoor, Kriti Sanon _ Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel - T-Series (youtube).mp3'),
    track29: new Audio('./Zinda Lyric Video - Bhaag Milkha Bhaag_Farhan Akhtar_Siddharth Mahadevan_Prasoon Joshi - SonyMusicIndiaVEVO (youtube).mp3'),
    track30: new Audio('./नगरी_हो_अयोध्या_सी_Nagri_ho_Ayodhya_si__Ram_bhajan__Raghukul_sa_Gharana_ho__Unplugged__(48k).mp3'),
};

// Function to play or pause individual tracks based on checkbox
function toggleMusic(checkbox) {
    const track = checkbox.getAttribute('data-audio');
    const audio = audioTracks[track];
    
    if (checkbox.checked) {
        audio.play();
    } else {
        audio.pause();
    }
}

// JavaScript to handle theme toggling
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });
});