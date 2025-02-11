import React, { useEffect, useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch('/data/MenuData.json')
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error('Erreur lors du chargement du menu:', error));
  }, []);

  if (!menuData) {
    return <p>Chargement du menu...</p>;
  }

  return (
    <div className="menu-page">
      <h1 className="menu-title">Notre Menu</h1>
      {menuData.menuSections.map((section, index) => (
        <div key={index} className="menu-section">
          <h2 className="menu-category">{section.category}</h2>
          <ul className="menu-list">
            {section.items.map((item, idx) => (
              <li key={idx} className="menu-item">
                <span className="menu-item-name">{item.name}</span>
                <span className="menu-item-price">{item.price}</span>
                {item.details && (
                  <ul className="menu-details">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
