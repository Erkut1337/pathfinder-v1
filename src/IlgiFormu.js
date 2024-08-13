import React, { useState } from 'react';

const IlgiFormu = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMainOptions, setSelectedMainOptions] = useState([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState({});
  const [duration, setDuration] = useState(1);

  const questions = [
    {
      question: "Şehri ziyaret etme amacınız nedir?",
      options: [
        { text: "Kültürel ve tarihi yerleri keşfetmek", tag: "tarihi_muze" },
        { text: "Alışveriş yapmak ve şehir merkezini gezmek", tag: "alışveriş" },
        { text: "Doğa yürüyüşleri ve açık hava aktiviteleri yapmak", tag: "doğa_yürüyüşü" },
        { text: "Gastronomi turu ve yerel lezzetleri keşfetmek", tag: "gastronomi" },
        { text: "Sanat ve kültür etkinliklerine katılmak", tag: "sanat_kültür" },
        { text: "Eğlence ve gece hayatını deneyimlemek", tag: "gece_hayatı" },
        { text: "Dinlenmek ve rahatlamak", tag: "rahatlama" }
      ],
      nextQuestions: {
        tarihi_muze: {
          question: "Hangi tür kültürel ve tarihi yerleri ziyaret etmeyi tercih edersiniz?",
          options: [
            { text: "Müzeler", tag: "müze" },
            { text: "Tarihi anıtlar", tag: "tarihi_anıt" },
            { text: "Arkeolojik alanlar", tag: "arkeolojik_alan" },
            { text: "Tarihi binalar ve yapılar", tag: "tarihi_bina" },
            { text: "Kültürel miras alanları", tag: "kültürel_miras" },
            { text: "Dini yapılar", tag: "dini_yapı" }
          ]
        },
        alışveriş: {
          question: "Hangi tür alışveriş yerlerini ziyaret etmeyi tercih edersiniz?",
          options: [
            { text: "Büyük alışveriş merkezleri", tag: "büyük_alışveriş_merkezi" },
            { text: "Yerel butikler ve küçük mağazalar", tag: "yerel_butik" },
            { text: "Pazarlar ve sosyete pazarları", tag: "pazar" },
            { text: "Antika dükkanları ve ikinci el mağazalar", tag: "antika_dükkanı" },
            { text: "Lüks markaların mağazaları", tag: "lüks_mağaza" }
          ]
        },
        doğa_yürüyüşü: {
          question: "Hangi tür açık hava aktivitelerini tercih edersiniz?",
          options: [
            { text: "Doğa yürüyüşleri ve trekking", tag: "doğa_yürüyüşü" },
            { text: "Bisiklet turları", tag: "bisiklet_turu" },
            { text: "Piknik ve kamp", tag: "piknik" },
            { text: "Dağcılık ve tırmanış", tag: "dağcılık" },
            { text: "Su sporları", tag: "su_sporları" },
            { text: "Hayvan gözlemciliği ve doğa fotoğrafçılığı", tag: "hayvan_gözlemciliği" }
          ]
        },
        gastronomi: {
          question: "Hangi tür mutfakları ve yemekleri denemeyi tercih edersiniz?",
          options: [
            { text: "Yerel mutfak", tag: "yerel_mutfak" },
            { text: "Deniz ürünleri", tag: "deniz_ürünleri" },
            { text: "Vegan veya vejetaryen yemekler", tag: "vegan" },
            { text: "Sokak yemekleri", tag: "sokak_yemekleri" },
            { text: "Lüks restoranlar", tag: "lüks_restoran" }
          ]
        },
        sanat_kültür: {
          question: "Hangi tür sanat ve kültür etkinliklerine katılmayı tercih edersiniz?",
          options: [
            { text: "Tiyatro oyunları", tag: "tiyatro" },
            { text: "Konserler ve müzik festivalleri", tag: "konser" },
            { text: "Sanat sergileri ve galeriler", tag: "sanat_sergisi" },
            { text: "Film gösterimleri ve festivalleri", tag: "film_gösterimi" },
            { text: "Dans gösterileri", tag: "dans_gösterisi" },
            { text: "Edebiyat etkinlikleri", tag: "edebiyat_etkinliği" }
          ]
        },
        gece_hayatı: {
          question: "Hangi tür eğlence ve gece hayatı etkinliklerine katılmayı tercih edersiniz?",
          options: [
            { text: "Barlar ve pub'lar", tag: "bar" },
            { text: "Gece kulüpleri", tag: "gece_kulübü" },
            { text: "Canlı müzik mekanları", tag: "canlı_müzik" },
            { text: "Karaoke barlar", tag: "karaoke_bar" },
            { text: "Açık hava etkinlikleri ve festivaller", tag: "açık_hava_etkinliği" }
          ]
        },
        rahatlama: {
          question: "Dinlenmek ve rahatlamak için hangi tür aktiviteleri tercih edersiniz?",
          options: [
            { text: "Spa ve masaj terapileri", tag: "spa" },
            { text: "Türk Hamamı", tag: "türk_hamamı" },
            { text: "Kaplıcalar ve termal havuzlar", tag: "kaplıca" },
            { text: "Meditasyon ve yoga seansları", tag: "meditasyon" },
            { text: "Plajda dinlenme", tag: "plajda_dinlenme" }
          ]
        }
      }
    },
    {
      question: "Şehri ziyaretiniz için konaklama rezervasyonu yaptınız mı?",
      options: [
        { text: "Evet", tag: "konaklama_evet" },
        { text: "Hayır", tag: "konaklama_hayır" }
      ]
    },
    {
      question: "Şehirde kaç gün konaklamayı planlıyorsunuz?",
      type: "input"
    }
  ];

  const handleMainOptionSelect = (tag) => {
    if (!selectedMainOptions.includes(tag)) {
      setSelectedMainOptions([...selectedMainOptions, tag]);
    } else {
      setSelectedMainOptions(selectedMainOptions.filter(option => option !== tag));
    }
  };

  const handleNextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep < selectedMainOptions.length + 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === selectedMainOptions.length + 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(selectedSubOptions, duration);
    }
  };

  const handleSubOptionSelect = (tag, subTag) => {
    setSelectedSubOptions({ ...selectedSubOptions, [tag]: subTag });
  };

  const handleInputChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div className="container">
      {currentStep === 0 && (
        <div>
          <h2 className="question">{questions[currentStep].question}</h2>
          {questions[currentStep].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedMainOptions.includes(option.tag) ? 'selected' : ''}`}
              onClick={() => handleMainOptionSelect(option.tag)}
            >
              {option.text}
            </button>
          ))}
          <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
        </div>
      )}

      {currentStep > 0 && currentStep <= selectedMainOptions.length && (
        <div>
          <h2 className="question">{questions[0].nextQuestions[selectedMainOptions[currentStep - 1]].question}</h2>
          {questions[0].nextQuestions[selectedMainOptions[currentStep - 1]].options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedSubOptions[selectedMainOptions[currentStep - 1]] === option.tag ? 'selected' : ''}`}
              onClick={() => handleSubOptionSelect(selectedMainOptions[currentStep - 1], option.tag)}
            >
              {option.text}
            </button>
          ))}
          <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
        </div>
      )}

      {currentStep > selectedMainOptions.length && (
        <div>
          {currentStep === selectedMainOptions.length + 1 && (
            <>
              <h2 className="question">{questions[1].question}</h2>
              {questions[1].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selectedSubOptions['konaklama'] === option.tag ? 'selected' : ''}`}
                  onClick={() => handleSubOptionSelect('konaklama', option.tag)}
                >
                  {option.text}
                </button>
              ))}
              <button onClick={handleNextStep} className="option-button next-button">Sonraki</button>
            </>
          )}

          {currentStep === selectedMainOptions.length + 2 && (
            <div className="input-container">
              <h2 className="question">{questions[2].question}</h2>
              <input
                type="number"
                min="1"
                value={duration}
                onChange={handleInputChange}
              />
              <button onClick={handleNextStep} className="option-button next-button">Rota Oluştur</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IlgiFormu;