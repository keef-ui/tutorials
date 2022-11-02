import styles from './AsideList.module.css'

// interface Item {id:number ;href: string ; title: string ; extraContent ?: boolean ;}


interface BasicItem {id:number ;href: string ; title: string ;}
interface Item extends BasicItem { extraContent ?: BasicItem[];}

 const AsideList = ({ list } : { list:Item[] }) => (
  <ol className={styles.menu}>
    {list.map((item: Item ) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ol>
);

export const ListItem = ({ item }: { item: Item }) => {
  const extraItems = item.extraContent ? item.extraContent : false;
  return (

    <>
      {extraItems ? (
        <>
          {" "}
          <li>
            <a href={item.href} className={""}>
              <p> {item.title} </p>
            </a>
          </li>
          <ExtraItems items={extraItems} />{" "}
        </>
      ) : (
        <li>
          <a href={item.href} className={""}>
            <p> {item.title} </p>
          </a>
        </li>
      )}
    </>
  );
};


const ExtraItems = ({ items }: { items: Item[] }) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.href} className={styles.extra_content}>
            <p> {item.title} </p>
          </a>
        </li>
      ))}
    </>
  );
};

export default AsideList;
