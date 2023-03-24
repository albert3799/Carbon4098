import React from "react";
import { useState } from "react";
export function MyScrollView({data,title,onSelectItems}) {

    // const data = [
    //     { id: 1, text: '2008' },
    //     { id: 2, text: '2009' },
    //     { id: 3, text: '2010' },
    //     { id: 4, text: '2011' },
    //     { id: 5, text: '2012' },
    //     { id: 6, text: '2013' },
    //     { id: 7, text: '2014' },
    //     { id: 8, text: '2015' },
    //     { id: 9, text: '2016' },
    //     { id: 10, text: '2017' },
    //     { id: 11, text: '2018' },
    //     { id: 12, text: '2019' },
    //     { id: 13, text: '2020' },
    //     { id: 14, text: '2021' }
    //   ];
  
    const [selectedItems, setSelectedItems] = useState([]);
    console.log("selected items scroll "+ selectedItems.text)
    const handleSelectItem = (item) => {
      if (selectedItems.includes(item.id)) {
        setSelectedItems(selectedItems.filter((id) => id !== item.id));
      } else {
        setSelectedItems([...selectedItems, item.id]);
      }
    };
  
    onSelectItems(selectedItems);
    return (
      <div>
        <h2>{title}</h2>
        <div style={{ height: "100%", overflowY: 'scroll' }}>
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '50px',
                backgroundColor: selectedItems.includes(item.id) ? 'lightblue' : 'white',
                cursor: 'pointer',
                padding: '10px',
                width:"100%"
              }}
              onClick={() => handleSelectItem(item)}
            >
              <span>{item.text}</span>
              <span>{selectedItems.includes(item.id) ? '✓' : ''}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  