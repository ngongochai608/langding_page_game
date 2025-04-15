import { createContext, useContext, useState } from 'react';
import iconCalendar from '../assets/images/calendar-tick.svg'
import iconDesign from '../assets/images/icon-design.svg'
import iconPeople from '../assets/images/people.svg'

const data = {
  'us': {
    'menu': [
      {
        'name': 'ABOUT US',
        'link': '#aboutus'
      },
      {
        'name': 'GAMES',
        'link': '#games'
      },
      {
        'name': 'PARTNERS',
        'link': '#partners'
      },
      {
        'name': 'CONTACT US',
        'link': '#contactus'
      }
    ],
    'banner': {
      'heading': 'We’re Getting Ready',
      'subheading': 'We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.',
    },
    'countdown': {
      'd': 'Days',
      'h': 'Hours',
      'm': 'Minutes',
      's': 'Second'
    },
    'input_form': {
      'placeholder': 'Enter your email'
    },
    'aboutus': {
      'heading': 'About Us',
      'subheading': 'Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.',
      'count_number': [
        {
          'number': 600,
          'label': 'Users',
          'unit': 'M'
        },
        {
          'number': 135,
          'label': 'Games'
        }
      ],
      'list': [
        {
          'label': '24 - Hour',
          'desc': "24/7 access ensures operators' businesses runs smoothly all year long.",
          'icon': iconCalendar
        },
        {
          'label': 'Design',
          'desc': "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
          'icon': iconDesign
        },
        {
          'label': 'Team',
          'desc': "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.",
          'icon': iconPeople
        }
      ]
    },
    'our_games': {
      'heading': 'Our Games',
      'subheading': 'As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.'
    },
    'our_partner': {
      'heading': 'Our Partners'
    },
    'footer': {
      'address': {
        'heading': 'Address',
        'list': [
          'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US',
          '20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam'
        ]
      },
      'subscriber': {
        'heading': 'Subscribe',
        'content': 'Subscribe to our newsletter and be the first to know about our updates'
      }
    }
  },
  'vn': {
    'menu': [
      {
        'name': 'VỀ CHÚNG TÔI',
        'link': '#aboutus'
      },
      {
        'name': 'TRÒ CHƠI',
        'link': '#games'
      },
      {
        'name': 'ĐỐI TÁC',
        'link': '#partners'
      },
      {
        'name': 'LIÊN HỆ',
        'link': '#contactus'
      }
    ],
    'banner': {
      'heading': 'Trò chơi sắp ra mắt',
      'subheading': 'Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.',
    },
    'input_form': {
      'placeholder': 'Địa chỉ email của bạn'
    },
    'countdown': {
      'd': 'Ngày',
      'h': 'Giờ',
      'm': 'Phút',
      's': 'Giây'
    },
    'aboutus': {
      'heading': 'Về chúng tôi',
      'subheading': 'Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.',
      'count_number': [
        {
          'number': 600,
          'label': 'Người chơi',
          'unit': 'M'
        },
        {
          'number': 135,
          'label': 'Trò chơi'
        }
      ],
      'list': [
        {
          'label': 'Truy Cập 24/7',
          'desc': "Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm.",
          'icon': iconCalendar
        },
        {
          'label': 'Thiết Kế',
          'desc': "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.",
          'icon': iconDesign
        },
        {
          'label': 'Đội Ngũ',
          'desc': "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.",
          'icon': iconPeople
        }
      ]
    },
    'our_games': {
      'heading': 'Trò chơi',
      'subheading': 'Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.'
    },
    'our_partner': {
      'heading': 'Đối tác'
    },
    'footer': {
      'address': {
        'heading': 'Địa chỉ',
        'list': [
          'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ',
          'Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam'
        ]
      },
      'subscriber': {
        'heading': 'Theo dõi',
        'content': 'Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi'
      }
    }
  }
}


const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('us');

  const value = {
    language,
    setLanguage,
    data: data[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);