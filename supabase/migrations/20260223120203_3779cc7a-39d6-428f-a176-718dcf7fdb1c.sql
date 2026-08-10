ALTER TABLE contests ADD COLUMN current_cycle integer NOT NULL DEFAULT 1;
ALTER TABLE lessons ADD COLUMN cycle integer NOT NULL DEFAULT 1;