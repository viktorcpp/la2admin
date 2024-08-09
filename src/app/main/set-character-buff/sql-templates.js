
export const charBuffsRemove = `DELETE FROM character_skills_save WHERE char_obj_id=%charId%`;

export const charBuffsAdd =
    `INSERT INTO character_skills_save 
        (char_obj_id, skill_id, skill_level, effect_count, effect_cur_time, reuse_delay, restore_type, class_index, buff_index) 
    VALUES `;

export const charBuffsAddValues =
   `(%charId%, 1062, 2, 1, 108, 0, 0, 0, 1),
	(%charId%, 1087, 3, 1, 108, 0, 0, 0, 2),
	(%charId%, 311, 1, 1, 108, 0, 0, 0, 3),
	(%charId%, 270, 1, 1, 108, 0, 0, 0, 4),
	(%charId%, 305, 1, 1, 108, 0, 0, 0, 5),
	(%charId%, 1033, 3, 1, 108, 0, 0, 0, 6),
	(%charId%, 1392, 3, 1, 108, 0, 0, 0, 7),
	(%charId%, 1393, 3, 1, 108, 0, 0, 0, 8),
	(%charId%, 1353, 1, 1, 108, 0, 0, 0, 9),
	(%charId%, 1352, 1, 1, 108, 0, 0, 0, 10),
	(%charId%, 1354, 1, 1, 108, 0, 0, 0, 11),
	(%charId%, 365, 1, 1, 108, 0, 0, 0, 12),
	(%charId%, 1268, 4, 1, 108, 0, 0, 0, 13),
	(%charId%, 1204, 2, 1, 107, 0, 0, 0, 14),
	(%charId%, 1068, 3, 1, 107, 0, 0, 0, 15),
	(%charId%, 1040, 3, 1, 107, 0, 0, 0, 16),
	(%charId%, 1035, 4, 1, 107, 0, 0, 0, 17),
	(%charId%, 1036, 2, 1, 107, 0, 0, 0, 18),
	(%charId%, 1045, 6, 1, 107, 0, 0, 0, 19),
	(%charId%, 1086, 2, 1, 107, 0, 0, 0, 20),
	(%charId%, 1077, 3, 1, 107, 0, 0, 0, 21),
	(%charId%, 1240, 3, 1, 107, 0, 0, 0, 22),
	(%charId%, 1242, 3, 1, 107, 0, 0, 0, 23),
	(%charId%, 264, 1, 1, 107, 0, 0, 0, 24),
	(%charId%, 267, 1, 1, 107, 0, 0, 0, 25),
	(%charId%, 268, 1, 1, 107, 0, 0, 0, 26),
	(%charId%, 269, 1, 1, 107, 0, 0, 0, 27),
	(%charId%, 304, 1, 1, 107, 0, 0, 0, 28),
	(%charId%, 349, 1, 1, 107, 0, 0, 0, 29),
	(%charId%, 364, 1, 1, 107, 0, 0, 0, 30),
	(%charId%, 271, 1, 1, 107, 0, 0, 0, 31),
	(%charId%, 274, 1, 1, 107, 0, 0, 0, 32),
	(%charId%, 275, 1, 1, 107, 0, 0, 0, 33),
	(%charId%, 1363, 1, 1, 107, 0, 0, 0, 34),
	(%charId%, 1391, 3, 1, 107, 0, 0, 0, 35),
	(%charId%, 4699, 1, 1, 107, 0, 0, 0, 36),
	(%charId%, 4703, 1, 1, 107, 0, 0, 0, 37),
	(%charId%, 272, 1, 1, 107, 0, 0, 0, 38),
	(%charId%, 277, 1, 1, 107, 0, 0, 0, 39),
	(%charId%, 310, 1, 1, 107, 0, 0, 0, 40),
	(%charId%, 1259, 4, 1, 107, 0, 0, 0, 41),
	(%charId%, 7049, 1, 1, 107, 0, 0, 0, 42)`;