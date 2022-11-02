import { listenerCount } from 'process';
import styles from '../../styles/Home.module.css'

//TO:Do this should be very basic lists rendering componnt. REfactor out links etc

interface Item {id:number ; title: string ; cssClass ?: string ;}

 const List = ({ list } : { list:Item[] }) => (
  <ol>
    {list.map((item: Item ) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ol>
);

export const ListItem = ({ item }:{ item: Item}) => (
  <li>
    <a href={item.href} className={item.extraContent ? styles.extra_content : ""}>
        <p> {item.title}  </p>
    </a>
  </li>
);


export default List;
