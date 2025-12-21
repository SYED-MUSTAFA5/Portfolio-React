/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
    const [item, setItem] = useState({ name: 'all', category: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.category === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter(
                (project) => project.category === item.category
            );
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (navItem, index) => {
        setItem(navItem); // navItem has both name and category
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        key={index}
                        onClick={() => handleClick(navItem, index)}
                        className={`${active === index ? 'active-work' : ''} work__item`}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((proj) => (
                    <WorksItems item={proj} key={proj.id}/>
                ))}
            </div>
        </div>
    );
};

export default Works;
