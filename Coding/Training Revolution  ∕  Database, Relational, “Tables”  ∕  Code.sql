CREATE TABLE exercises (
	exercises_id INT NOT NULL IDENTITY,
	exercises_decoding VARCHAR(255) NOT NULL,
	exercises_name VARCHAR(255) NOT NULL,
	exercises_aliases VARCHAR(255),
	exercises_type VARCHAR(255),
	exercises_focus VARCHAR(255),
	exercises_variation VARCHAR(255),
	exercises_motion VARCHAR(255),
	exercises_grip VARCHAR(255),
	exercises_configuration VARCHAR(255),
	exercises_facilitation VARCHAR(255),
	exercises_orientation VARCHAR(255),
	exercises_equipment VARCHAR(255),
	exercises_difficulty INT,
	PRIMARY KEY(exercises_id)
 );

CREATE TABLE muscles (
	muscles_id INT NOT NULL IDENTITY,
	muscles_decoding VARCHAR(255) NOT NULL,
	muscles_name VARCHAR(255),
	muscles_aliases VARCHAR(255),
	muscles_bodypart VARCHAR(255),
	muscles_section VARCHAR(255),
	muscles_group VARCHAR(255),
	PRIMARY KEY(muscles_id)
);

CREATE TABLE equipment (
	equipment_id INT NOT NULL IDENTITY,
	equipment_decoding VARCHAR(255) NOT NULL,
	equipment_name VARCHAR(255),
	equipment_aliases VARCHAR(255),
	equipment_category VARCHAR(255),
	equipment_subcategory VARCHAR(255),
	equipment_type VARCHAR(255),
	equipment_variation VARCHAR(255),
	equipment_mechanism VARCHAR(255),
	equipment_configuration VARCHAR(255),
	equipment_inclination VARCHAR(255),
	PRIMARY KEY(equipment_id)
);

CREATE TABLE positions (
	positions_id INT NOT NULL IDENTITY,
	positions_decoding VARCHAR(255) NOT NULL,
	positions_name VARCHAR(255),
	positions_aliases VARCHAR(255),
	positions_category VARCHAR(255),
	positions_subcategory VARCHAR(255),
	positions_type VARCHAR(255),
	positions_variation VARCHAR(255),
	positions_direction VARCHAR(255),
	positions_configuration VARCHAR(255),
	positions_inclination VARCHAR(255),
	PRIMARY KEY(positions_id)
);

CREATE TABLE categorization (
	categorization_id INT NOT NULL IDENTITY,
	categorization_name VARCHAR(255),
	categorization_aliases VARCHAR(255),
	categorization_category VARCHAR(255),
	categorization_type VARCHAR(255),
	PRIMARY KEY(categorization_id)
);

CREATE TABLE exercises_x_muscles (
	exercises_id INT,
	muscles_id INT,
	PRIMARY KEY(exercises_id, muscles_id),
	FOREIGN KEY(exercises_id) REFERENCES exercises (exercises_id),
	FOREIGN KEY(muscles_id) REFERENCES muscles (muscles_id)
);

CREATE TABLE exercises_x_equipment (
	exercises_id INT,
	equipment_id INT,
	exercises_x_equipment_quantity INT,
	PRIMARY KEY(exercises_id, equipment_id),
	FOREIGN KEY(exercises_id) REFERENCES exercises (exercises_id),
	FOREIGN KEY(equipment_id) REFERENCES equipment (equipment_id)
);

CREATE TABLE exercises_x_positions (
	exercises_id INT,
	positions_id INT,
	PRIMARY KEY(exercises_id, positions_id),
	FOREIGN KEY(exercises_id) REFERENCES exercises (exercises_id),
	FOREIGN KEY(positions_id) REFERENCES positions (positions_id)
);

CREATE TABLE exercises_x_categorization (
	exercises_id INT,
	categorization_id INT,
	PRIMARY KEY(exercises_id, categorization_id),
	FOREIGN KEY(exercises_id) REFERENCES exercises (exercises_id),
	FOREIGN KEY(categorization_id) REFERENCES categorization (categorization_id)
);
