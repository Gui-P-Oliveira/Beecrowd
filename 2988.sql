--- URI Online Judge SQL
--- Copyright URI Online Judge
--- www.urionlinejudge.com.br
--- Problem 2988

CREATE TABLE teams (
    id integer PRIMARY KEY,
    name varchar(50)
);

CREATE TABLE matches  (
    id integer PRIMARY KEY,
    team_1 integer,
    team_2 integer,
    team_1_goals integer,
    team_2_goals integer,
    FOREIGN KEY (team_1) REFERENCES teams(id),
    FOREIGN KEY (team_2) REFERENCES teams(id)
);

insert into teams
    (id, name)
values
    (1,'CEARA'),
    (2,'FORTALEZA'),
    (3,'GUARANY DE SOBRAL'),
    (4,'FLORESTA');

insert into  matches
    (id, team_1, team_2, team_1_goals, team_2_goals)
values
    (1,4,1,0,4),
    (2,3,2,0,1),
    (3,1,3,3,0),
    (4,3,4,0,1),
    (5,1,2,0,0),
    (6,2,4,2,1);

select 
	t.name, 
	count(m.team_1 + m.team_2) as matches,
	sum(case when (m.team_1_goals > m.team_2_goals
				and t.id = m.team_1)
				or (m.team_2_goals > m.team_1_goals
				and t.id = m.team_2) then 1 else 0 end) as victories,
	sum(case when (m.team_1_goals < m.team_2_goals
				and t.id = m.team_1)
				or (m.team_2_goals < m.team_1_goals
				and t.id = m.team_2) then 1 else 0 end) as defeats,
	sum(case when (m.team_1_goals = m.team_2_goals
				and t.id = m.team_1)
				or (m.team_2_goals = m.team_1_goals
				and t.id = m.team_2) then 1 else 0 end) as draws,	
	sum(case when  (m.team_1_goals = m.team_2_goals
              and t.id = m.team_1)
              or (m.team_2_goals = m.team_1_goals
              and t.id = m.team_2) then 1 else  0 end) 
   	+ 
  	sum(case when  (m.team_1_goals > m.team_2_goals
              and t.id = m.team_1)
              or (m.team_2_goals > m.team_1_goals
              and t.id = m.team_2) then 3 else  0 end)  as score	
from
	teams t 
	inner join
	matches m 
		on m.team_1  = t.id 
		or m.team_2  = t.id 
		group by t.name
		order by score desc;

/* Execute this query to drop the table */
-- DROP TABLE matches;
