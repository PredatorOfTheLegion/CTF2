"use client";
import * as React from "react";
import styles from "./news.module.scss";
import Image from "next/image";
import LeftArrow from "@/left-arrow.svg";
import clsx from "clsx";

interface ApiDataItem {
  imageUrl: string;
  title: string;
  description: string;
  hashTags: string[];
}

const API_DATA: ApiDataItem[] = [
  {
    imageUrl: "first.png",
    title: "🎉Обновление CSGO уже здесь! 🎉",
    description:
      'Valve объявила о значительных изменениях в режиме "Бой насмерть" в Counter-Strike: Global Offensive. Теперь игроки могут наслаждаться более быстрыми раундами и новой системой наград. Кроме того, внедрены исправления багов, улучшения производительности и оптимизация интерфейса. Подготовьтесь к улучшенному игровому опыту и новым вызовам! Поделитесь своими впечатлениями и стратегиями!',
    hashTags: ["PlayCSGO", "CSGOUpdate"],
  },
  {
    imageUrl: "second.png",
    title: "🚨 Новые обновления в CSGO! 🚨",
    description:
      "Внимание, игроки! Valve только что выпустила новый патч для Counter-Strike: Global Offensive,добавив улучшения карты Mirage и новый набор скинов для оружия. Проверьте новые тактические возможности и уникальные дизайны. Не пропустите шанс присоединиться к соревнованиям этого месяца с удвоенными XP. Будьте в курсе всех изменений и максимизируйте свои шансы на победу! ",
    hashTags: ["CSGO", "gamingnews"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1705615791178-d32cc2cdcd9c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "🎉 2 Обновление CSGO уже здесь! 🎉",
    description:
      'Valve объявила о значительных изменениях в режиме "Бой насмерть" в Counter-Strike: Global Offensive. Теперь игроки могут наслаждаться более быстрыми раундами и новой системой наград. Кроме того, внедрены исправления багов, улучшения производительности и оптимизация интерфейса. Подготовьтесь к улучшенному игровому опыту и новым вызовам! Поделитесь своими впечатлениями и стратегиями!',
    hashTags: ["CSGO", "CSGOUpdate"],
  },
];

const postpone = (
  cb: (...args: any[]) => unknown = () => undefined,
  timeout = 300
) => setTimeout(cb, timeout);

const News = React.memo(() => {
  const [data, setData] = React.useState([...API_DATA, API_DATA[0]]);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const innerCarouselContainerRef = React.useRef<HTMLDivElement | null>(null);

  const handleNavigateSlides = React.useCallback(
    (isNextSlide: boolean) => () => {
      const navigate = () =>
        setCurrentSlide(currentSlide + (isNextSlide ? 1 : -1));

      if (isNextSlide) {
        if (!data[currentSlide + 2]) {
          setCurrentSlide(currentSlide + 1);

          postpone(() => {
            innerCarouselContainerRef.current?.classList.add(
              styles.innerCarouselContainer_disabledTransition
            );

            setCurrentSlide(0);

            postpone(() => {
              innerCarouselContainerRef.current?.classList.remove(
                styles.innerCarouselContainer_disabledTransition
              );
            }, 300);
          }, 300);

          return;
        }

        navigate();
      } else if (!isNextSlide && currentSlide - 1 >= 0) {
        navigate();
      }
    },
    [currentSlide]
  );

  React.useEffect(() => {
    if (innerCarouselContainerRef.current) {
      const innerCarouselContainer = innerCarouselContainerRef.current;
      innerCarouselContainer.style.transform = `translateX(-${
        currentSlide * (containerWidth * 0.9)
      }px)`;
    }
  }, [currentSlide]);

  React.useEffect(() => {
    const interval = setInterval(() => handleNavigateSlides(true)(), 180000);

    return () => {
      clearInterval(interval);
    };
  }, [handleNavigateSlides]);

  const handleRef = React.useCallback((ref: HTMLDivElement) => {
    const { width } = ref.getBoundingClientRect();
    setContainerWidth(width);
  }, []);

  return (
    <div className={styles.outerWrapper} ref={handleRef}>
      <div className={styles.innerWrapper}>
        <div className={styles.smoke} />
        <div className={clsx(styles.smoke, styles.smoke_delayed)} />
        <div
          ref={innerCarouselContainerRef}
          className={clsx(
            styles.innerCarouselContainer,
            !containerWidth && styles.innerCarouselContainer_loading
          )}
          style={{
            width: `calc(${data.length * 100}%)`,
          }}>
          {!containerWidth ? (
            <div className={styles.loader} />
          ) : (
            data.map(({ imageUrl, title, description, hashTags }, index) => (
              <div
                className={styles.slide}
                key={`slide-${index}`}
                style={{
                  width: containerWidth * 0.9,
                }}>
                {index === currentSlide && (
                  <Image
                    src={LeftArrow}
                    alt="left-arrow"
                    className={styles.slideControl}
                    width={20}
                    height={24}
                    onClick={handleNavigateSlides(false)}
                  />
                )}
                <div
                  className={clsx(
                    styles.image,
                    styles.commonBorderStyles,
                    styles.borderImage
                  )}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                />
                <div
                  className={clsx(
                    styles.carouselContent,
                    styles.commonBorderStyles,
                    styles.borderText
                  )}>
                  <div className={clsx(styles.text, styles.title)}>
                    {title}
                    {hashTags.map((hashTag, index) => (
                      <span key={hashTag + index} className={styles.chip}>
                        #{hashTag}
                      </span>
                    ))}
                  </div>
                  <div className={clsx(styles.text, styles.description)}>
                    {description}
                  </div>
                </div>
                {index === currentSlide && (
                  <Image
                    src={LeftArrow}
                    alt="left-arrow"
                    className={clsx(
                      styles.slideControl,
                      styles.slideControl_reversed
                    )}
                    width={20}
                    height={24}
                    onClick={handleNavigateSlides(true)}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});

export default News;
