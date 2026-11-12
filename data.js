/* Game reference data. Edit data.json and regenerate this file if changing recipes. */
window.OREFARER_DATA = {
  "version": "13",
  "currency": "c",
  "units": {
    "raw_refined": "m3",
    "printed_fabricated": "items"
  },
  "resources": [
    "Carbon",
    "Copper",
    "Gold",
    "Ice",
    "Iron",
    "Silicon",
    "Silver",
    "Titanium",
    "Uranium"
  ],
  "refining": {
    "fee_c_per_m3_output_character": 0.96,
    "base_fee_c_per_m3_output_estimate": 1,
    "ice_to_water": "purity fraction",
    "water_to_fuel": 0.2,
    "steel": {
      "Iron": 1,
      "Carbon": 0.2,
      "output_m3": 0.4
    },
    "titanium_steel": {
      "Iron": 1,
      "Carbon": 0.3,
      "Titanium": 0.3,
      "output_m3": 0.4
    }
  },
  "printing": [
    {
      "name": "Fuel Cartridge",
      "inputs_m3": {
        "Fuel": 10,
        "Carbon": 1
      },
      "time_display": "10m 48s",
      "fee_c": 10.56,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 11,
      "base_seconds_estimate": 661
    },
    {
      "name": "Carbon Fiber Hull Frame",
      "inputs_m3": {
        "Titanium": 4,
        "Carbon": 6
      },
      "time_display": "9m 49s",
      "fee_c": 9.6,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 10,
      "base_seconds_estimate": 601
    },
    {
      "name": "Structural Frame",
      "inputs_m3": {
        "Iron": 6
      },
      "time_display": "5m 53s",
      "fee_c": 5.76,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 6,
      "base_seconds_estimate": 360
    },
    {
      "name": "Nuclear Fuel Cartridge",
      "inputs_m3": {
        "Uranium": 1,
        "Carbon": 1
      },
      "time_display": "1m 58s",
      "fee_c": 1.92,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 2,
      "base_seconds_estimate": 120
    },
    {
      "name": "Steel Frame",
      "inputs_m3": {
        "Steel": 6
      },
      "time_display": "5m 53s",
      "fee_c": 5.76,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 6,
      "base_seconds_estimate": 360
    },
    {
      "name": "Titanium Steel Frame",
      "inputs_m3": {
        "Titanium Steel": 6
      },
      "time_display": "5m 53s",
      "fee_c": 5.76,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 6,
      "base_seconds_estimate": 360
    },
    {
      "name": "Wiring Bundle",
      "inputs_m3": {
        "Copper": 3
      },
      "time_display": "2m 57s",
      "fee_c": 2.88,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 3,
      "base_seconds_estimate": 181
    },
    {
      "name": "Silver-Plated Circuit Board",
      "inputs_m3": {
        "Silicon": 4,
        "Copper": 2,
        "Silver": 2
      },
      "time_display": "7m 51s",
      "fee_c": 7.68,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 8,
      "base_seconds_estimate": 480
    },
    {
      "name": "Circuit Board",
      "inputs_m3": {
        "Silicon": 2,
        "Copper": 1
      },
      "time_display": "2m 57s",
      "fee_c": 2.88,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 3,
      "base_seconds_estimate": 181
    },
    {
      "name": "Hull Panel",
      "inputs_m3": {
        "Iron": 8,
        "Carbon": 2
      },
      "time_display": "9m 49s",
      "fee_c": 9.6,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 10,
      "base_seconds_estimate": 601
    },
    {
      "name": "Gold-Plated Circuit Board",
      "inputs_m3": {
        "Silicon": 4,
        "Copper": 2,
        "Gold": 2
      },
      "time_display": "7m 51s",
      "fee_c": 7.68,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 8,
      "base_seconds_estimate": 480
    },
    {
      "name": "Heat Sink",
      "inputs_m3": {
        "Iron": 2,
        "Copper": 1
      },
      "time_display": "3m 56s",
      "fee_c": 3.84,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 4,
      "base_seconds_estimate": 241
    },
    {
      "name": "Composite Panel",
      "inputs_m3": {
        "Carbon": 4,
        "Iron": 2
      },
      "time_display": "5m 53s",
      "fee_c": 5.76,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 6,
      "base_seconds_estimate": 360
    },
    {
      "name": "Pressure Vessel",
      "inputs_m3": {
        "Iron": 4,
        "Titanium": 2
      },
      "time_display": "5m 53s",
      "fee_c": 5.76,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 6,
      "base_seconds_estimate": 360
    },
    {
      "name": "Actuator",
      "inputs_m3": {
        "Iron": 2,
        "Copper": 1,
        "Carbon": 1
      },
      "time_display": "3m 56s",
      "fee_c": 3.84,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 4,
      "base_seconds_estimate": 241
    },
    {
      "name": "Titanium Brace",
      "inputs_m3": {
        "Titanium": 3,
        "Iron": 1
      },
      "time_display": "3m 56s",
      "fee_c": 3.84,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 4,
      "base_seconds_estimate": 241
    },
    {
      "name": "Radiation Shield",
      "inputs_m3": {
        "Iron": 3,
        "Titanium": 2,
        "Carbon": 3
      },
      "time_display": "7m 51s",
      "fee_c": 7.68,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 8,
      "base_seconds_estimate": 480
    },
    {
      "name": "Ceramic Liner",
      "inputs_m3": {
        "Silicon": 3,
        "Carbon": 2
      },
      "time_display": "4m 55s",
      "fee_c": 4.8,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 5,
      "base_seconds_estimate": 301
    },
    {
      "name": "Sensor Array",
      "inputs_m3": {
        "Silicon": 1,
        "Copper": 1,
        "Gold": 0.5
      },
      "time_display": "2m 28s",
      "fee_c": 2.4,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 2,
      "base_seconds_estimate": 151
    },
    {
      "name": "Carbon Laser Head",
      "inputs_m3": {
        "Carbon": 10,
        "Iron": 5
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Copper Laser Head",
      "inputs_m3": {
        "Copper": 11,
        "Iron": 4
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Gold Laser Head",
      "inputs_m3": {
        "Gold": 7,
        "Copper": 5,
        "Silicon": 3
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Iron Laser Head",
      "inputs_m3": {
        "Iron": 12,
        "Copper": 3
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Silicon Laser Head",
      "inputs_m3": {
        "Silicon": 10,
        "Copper": 5
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Silver Laser Head",
      "inputs_m3": {
        "Silver": 7,
        "Copper": 5,
        "Silicon": 3
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Titanium Laser Head",
      "inputs_m3": {
        "Titanium": 8,
        "Iron": 4,
        "Copper": 3
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    },
    {
      "name": "Uranium Laser Head",
      "inputs_m3": {
        "Uranium": 6,
        "Silicon": 5,
        "Copper": 4
      },
      "time_display": "14m 43s",
      "fee_c": 14.41,
      "status": "screenshot verified; character adjusted",
      "base_fee_c_estimate": 15,
      "base_seconds_estimate": 901
    }
  ],
  "ships": [
    {
      "name": "Atlas I",
      "tier": 1,
      "cargo_slots": 6,
      "slot_depth_m3": 100,
      "seconds_per_distance": 150,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 1,
      "cartridge_capacity": 5,
      "status": "screenshot verified",
      "construction_hours": 24,
      "construction_materials_m3": {
        "Iron": 80,
        "Copper": 40,
        "Silicon": 20,
        "Carbon": 40
      }
    },
    {
      "name": "Boomerang",
      "tier": 1,
      "cargo_slots": 1,
      "slot_depth_m3": 200,
      "seconds_per_distance": 30,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 5,
      "status": "screenshot verified",
      "construction_hours": 6,
      "construction_materials_m3": {
        "Iron": 100,
        "Copper": 20,
        "Silicon": 25,
        "Carbon": 100,
        "Titanium": 50
      }
    },
    {
      "name": "Delver I",
      "tier": 1,
      "cargo_slots": 6,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 1,
      "drone_bays": 1,
      "utility_slots": 1,
      "cartridge_capacity": 5,
      "status": "screenshot verified",
      "construction_hours": 24,
      "construction_materials_m3": {
        "Iron": 80,
        "Copper": 40,
        "Silicon": 20,
        "Carbon": 40
      }
    },
    {
      "name": "Narwhal I",
      "tier": 1,
      "cargo_slots": 4,
      "slot_depth_m3": 200,
      "seconds_per_distance": 150,
      "mining_mounts": 1,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 5,
      "status": "screenshot verified",
      "construction_hours": 24,
      "construction_materials_m3": {
        "Iron": 80,
        "Copper": 40,
        "Silicon": 20,
        "Carbon": 40
      }
    },
    {
      "name": "Porter",
      "tier": 1,
      "cargo_slots": 1,
      "slot_depth_m3": 150,
      "seconds_per_distance": 30,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 5,
      "status": "screenshot verified",
      "construction_hours": 6,
      "construction_materials_m3": {
        "Iron": 100,
        "Copper": 20,
        "Silicon": 25,
        "Carbon": 100,
        "Titanium": 50
      }
    },
    {
      "name": "Veinseeker I",
      "tier": 1,
      "cargo_slots": 6,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 2,
      "drone_bays": 1,
      "utility_slots": 0,
      "cartridge_capacity": 0,
      "status": "screenshot verified",
      "construction_hours": 24,
      "construction_materials_m3": {
        "Iron": 80,
        "Copper": 40,
        "Silicon": 20,
        "Carbon": 40
      }
    },
    {
      "name": "Wayfarer",
      "tier": 1,
      "cargo_slots": 0,
      "slot_depth_m3": 0,
      "seconds_per_distance": 15,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 0,
      "status": "screenshot verified",
      "construction_hours": 6,
      "construction_materials_m3": {
        "Iron": 100,
        "Copper": 20,
        "Silicon": 25,
        "Carbon": 100,
        "Titanium": 50
      }
    },
    {
      "name": "Atlas II",
      "tier": 2,
      "cargo_slots": 8,
      "slot_depth_m3": 100,
      "seconds_per_distance": 150,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 1,
      "cartridge_capacity": 10,
      "status": "screenshot verified",
      "construction_hours": 72,
      "construction_materials_m3": {
        "Iron": 720,
        "Copper": 360,
        "Silicon": 270,
        "Carbon": 270,
        "Titanium": 180,
        "Gold": 100
      }
    },
    {
      "name": "Delver II",
      "tier": 2,
      "cargo_slots": 8,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 1,
      "drone_bays": 1,
      "utility_slots": 1,
      "cartridge_capacity": 10,
      "status": "screenshot verified",
      "construction_hours": 72,
      "construction_materials_m3": {
        "Iron": 720,
        "Copper": 360,
        "Silicon": 270,
        "Carbon": 270,
        "Titanium": 180,
        "Gold": 50
      }
    },
    {
      "name": "Narwhal II",
      "tier": 2,
      "cargo_slots": 4,
      "slot_depth_m3": 300,
      "seconds_per_distance": 150,
      "mining_mounts": 1,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 10,
      "status": "screenshot verified",
      "construction_hours": 72,
      "construction_materials_m3": {
        "Iron": 720,
        "Copper": 360,
        "Silicon": 270,
        "Carbon": 270,
        "Titanium": 180,
        "Gold": 50
      }
    },
    {
      "name": "Veinseeker II",
      "tier": 2,
      "cargo_slots": 8,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 2,
      "drone_bays": 1,
      "utility_slots": 0,
      "cartridge_capacity": 0,
      "status": "screenshot verified",
      "construction_hours": 72,
      "construction_materials_m3": {
        "Iron": 720,
        "Copper": 360,
        "Silicon": 270,
        "Carbon": 270,
        "Titanium": 180,
        "Gold": 50
      }
    },
    {
      "name": "Atlas III",
      "tier": 3,
      "cargo_slots": 10,
      "slot_depth_m3": 100,
      "seconds_per_distance": 150,
      "mining_mounts": 0,
      "drone_bays": 0,
      "utility_slots": 1,
      "cartridge_capacity": 15,
      "status": "screenshot verified",
      "construction_hours": 216,
      "construction_materials_m3": {
        "Iron": 2160,
        "Copper": 1080,
        "Silicon": 810,
        "Carbon": 810,
        "Titanium": 540,
        "Gold": 300
      }
    },
    {
      "name": "Delver III",
      "tier": 3,
      "cargo_slots": 10,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 1,
      "drone_bays": 1,
      "utility_slots": 1,
      "cartridge_capacity": 15,
      "status": "screenshot verified",
      "construction_hours": 216,
      "construction_materials_m3": {
        "Iron": 2160,
        "Copper": 1080,
        "Silicon": 810,
        "Carbon": 810,
        "Titanium": 540,
        "Gold": 150
      }
    },
    {
      "name": "Narwhal III",
      "tier": 3,
      "cargo_slots": 4,
      "slot_depth_m3": 400,
      "seconds_per_distance": 150,
      "mining_mounts": 1,
      "drone_bays": 0,
      "utility_slots": 0,
      "cartridge_capacity": 15,
      "status": "screenshot verified",
      "construction_hours": 216,
      "construction_materials_m3": {
        "Iron": 2160,
        "Copper": 1080,
        "Silicon": 810,
        "Carbon": 810,
        "Titanium": 540,
        "Gold": 150
      }
    },
    {
      "name": "Veinseeker III",
      "tier": 3,
      "cargo_slots": 10,
      "slot_depth_m3": 20,
      "seconds_per_distance": 30,
      "mining_mounts": 2,
      "drone_bays": 1,
      "utility_slots": 0,
      "cartridge_capacity": 0,
      "status": "screenshot verified",
      "construction_hours": 216,
      "construction_materials_m3": {
        "Iron": 2160,
        "Copper": 1080,
        "Silicon": 810,
        "Carbon": 810,
        "Titanium": 540,
        "Gold": 150
      }
    }
  ],
  "mining_lasers": [
    {
      "name": "T1 Standard Iron Mining Laser",
      "ore": "Iron",
      "tier": 1,
      "variant": "Standard",
      "components_each": 1,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 57.62,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 60,
      "base_seconds_estimate": 3600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Iron Mining Laser",
      "ore": "Iron",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 1,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 115.24,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 120,
      "base_seconds_estimate": 7200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Iron Mining Laser",
      "ore": "Iron",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 1,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 172.86,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 180,
      "base_seconds_estimate": 10800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Iron Mining Laser",
      "ore": "Iron",
      "tier": 2,
      "variant": "Standard",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 230.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 240,
      "base_seconds_estimate": 14400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Iron Mining Laser",
      "ore": "Iron",
      "tier": 2,
      "variant": "Fuel",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 460.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 480,
      "base_seconds_estimate": 28800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Iron Mining Laser",
      "ore": "Iron",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 691.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Iron Mining Laser",
      "ore": "Iron",
      "tier": 3,
      "variant": "Standard",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 460.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 480,
      "base_seconds_estimate": 28800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Iron Mining Laser",
      "ore": "Iron",
      "tier": 3,
      "variant": "Fuel",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 921.92,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 960,
      "base_seconds_estimate": 57600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Iron Mining Laser",
      "ore": "Iron",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 1382.88,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Copper Mining Laser",
      "ore": "Copper",
      "tier": 1,
      "variant": "Standard",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 72.03,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 75,
      "base_seconds_estimate": 4500,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Copper Mining Laser",
      "ore": "Copper",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 144.06,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 150,
      "base_seconds_estimate": 9000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Copper Mining Laser",
      "ore": "Copper",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 216.09,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 225,
      "base_seconds_estimate": 13500,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Copper Mining Laser",
      "ore": "Copper",
      "tier": 2,
      "variant": "Standard",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 288.12,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 300,
      "base_seconds_estimate": 18000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Copper Mining Laser",
      "ore": "Copper",
      "tier": 2,
      "variant": "Fuel",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 576.24,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 600,
      "base_seconds_estimate": 36000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Copper Mining Laser",
      "ore": "Copper",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 864.36,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 900,
      "base_seconds_estimate": 54000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Copper Mining Laser",
      "ore": "Copper",
      "tier": 3,
      "variant": "Standard",
      "components_each": 4,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 576.24,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 600,
      "base_seconds_estimate": 36000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Copper Mining Laser",
      "ore": "Copper",
      "tier": 3,
      "variant": "Fuel",
      "components_each": 4,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 1152.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1200,
      "base_seconds_estimate": 72000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Copper Mining Laser",
      "ore": "Copper",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": 4,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 1728.72,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1800,
      "base_seconds_estimate": 108000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 1,
      "variant": "Standard",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 86.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 90,
      "base_seconds_estimate": 5400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 172.88,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 180,
      "base_seconds_estimate": 10800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 259.32,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 270,
      "base_seconds_estimate": 16200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 2,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 345.76,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 2,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 691.52,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 1037.28,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1080,
      "base_seconds_estimate": 64800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 3,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 691.52,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 3,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 1383.04,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Silicon Mining Laser",
      "ore": "Silicon",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 2074.56,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2160,
      "base_seconds_estimate": 129600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 1,
      "variant": "Standard",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 86.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 90,
      "base_seconds_estimate": 5400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 172.88,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 180,
      "base_seconds_estimate": 10800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 259.32,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 270,
      "base_seconds_estimate": 16200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 2,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 345.76,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 2,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 691.52,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 1037.28,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1080,
      "base_seconds_estimate": 64800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 3,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 691.52,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 3,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 1383.04,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Carbon Mining Laser",
      "ore": "Carbon",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 2074.56,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2160,
      "base_seconds_estimate": 129600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 1,
      "variant": "Standard",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 115.25,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 120,
      "base_seconds_estimate": 7200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 230.5,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 240,
      "base_seconds_estimate": 14400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 2,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 345.75,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 2,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 461.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 480,
      "base_seconds_estimate": 28800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 2,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 922.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 960,
      "base_seconds_estimate": 57600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 1383.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 3,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 922.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 960,
      "base_seconds_estimate": 57600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 3,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 1844.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1920,
      "base_seconds_estimate": 115200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Titanium Mining Laser",
      "ore": "Titanium",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 2766.0,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2880,
      "base_seconds_estimate": 172800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Silver Mining Laser",
      "ore": "Silver",
      "tier": 1,
      "variant": "Standard",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 144.06,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 150,
      "base_seconds_estimate": 9000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Silver Mining Laser",
      "ore": "Silver",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 288.12,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 300,
      "base_seconds_estimate": 18000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Silver Mining Laser",
      "ore": "Silver",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 432.18,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 450,
      "base_seconds_estimate": 27000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Silver Mining Laser",
      "ore": "Silver",
      "tier": 2,
      "variant": "Standard",
      "components_each": 5,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 576.24,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 600,
      "base_seconds_estimate": 36000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Silver Mining Laser",
      "ore": "Silver",
      "tier": 2,
      "variant": "Fuel",
      "components_each": 5,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 1152.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1200,
      "base_seconds_estimate": 72000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Silver Mining Laser",
      "ore": "Silver",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": 5,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 1728.72,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1800,
      "base_seconds_estimate": 108000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Silver Mining Laser",
      "ore": "Silver",
      "tier": 3,
      "variant": "Standard",
      "components_each": 8,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 1152.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1200,
      "base_seconds_estimate": 72000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Silver Mining Laser",
      "ore": "Silver",
      "tier": 3,
      "variant": "Fuel",
      "components_each": 8,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 2304.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2400,
      "base_seconds_estimate": 144000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Silver Mining Laser",
      "ore": "Silver",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": 8,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 3457.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 3600,
      "base_seconds_estimate": 216000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Gold Mining Laser",
      "ore": "Gold",
      "tier": 1,
      "variant": "Standard",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 144.06,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 150,
      "base_seconds_estimate": 9000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Gold Mining Laser",
      "ore": "Gold",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 288.12,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 300,
      "base_seconds_estimate": 18000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Gold Mining Laser",
      "ore": "Gold",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 432.18,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 450,
      "base_seconds_estimate": 27000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Gold Mining Laser",
      "ore": "Gold",
      "tier": 2,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 576.24,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 600,
      "base_seconds_estimate": 36000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Gold Mining Laser",
      "ore": "Gold",
      "tier": 2,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 1152.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1200,
      "base_seconds_estimate": 72000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Gold Mining Laser",
      "ore": "Gold",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 1728.72,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1800,
      "base_seconds_estimate": 108000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Gold Mining Laser",
      "ore": "Gold",
      "tier": 3,
      "variant": "Standard",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 1152.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1200,
      "base_seconds_estimate": 72000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Gold Mining Laser",
      "ore": "Gold",
      "tier": 3,
      "variant": "Fuel",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 2304.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2400,
      "base_seconds_estimate": 144000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Gold Mining Laser",
      "ore": "Gold",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": null,
      "quantity_status": "unknown - do not infer",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 3457.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 3600,
      "base_seconds_estimate": 216000,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Standard Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 1,
      "variant": "Standard",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.1,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 172.87,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 180,
      "base_seconds_estimate": 10800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Fuel Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 1,
      "variant": "Fuel",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.11499999999999999,
      "fuel_cartridge_pct_per_min": 2.5,
      "fabrication_fee_estimate_c": 345.74,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T1 Nuclear Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 1,
      "variant": "Nuclear",
      "components_each": 3,
      "quantity_status": "verified",
      "frame": "Structural Frame",
      "board": "Circuit Board",
      "mining_rate_m3_s": 0.13,
      "fuel_cartridge_pct_per_min": 5,
      "fabrication_fee_estimate_c": 518.61,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 540,
      "base_seconds_estimate": 32400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Standard Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 2,
      "variant": "Standard",
      "components_each": 6,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.15,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 691.48,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Fuel Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 2,
      "variant": "Fuel",
      "components_each": 6,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.1725,
      "fuel_cartridge_pct_per_min": 5.0,
      "fabrication_fee_estimate_c": 1382.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T2 Nuclear Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 2,
      "variant": "Nuclear",
      "components_each": 6,
      "quantity_status": "verified",
      "frame": "Steel Frame",
      "board": "Silver-Plated Circuit Board",
      "mining_rate_m3_s": 0.195,
      "fuel_cartridge_pct_per_min": 10,
      "fabrication_fee_estimate_c": 2074.44,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2160,
      "base_seconds_estimate": 129600,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Standard Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 3,
      "variant": "Standard",
      "components_each": 9,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.2,
      "fuel_cartridge_pct_per_min": 0,
      "fabrication_fee_estimate_c": 1382.96,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Fuel Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 3,
      "variant": "Fuel",
      "components_each": 9,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.22999999999999998,
      "fuel_cartridge_pct_per_min": 7.5,
      "fabrication_fee_estimate_c": 2765.92,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 2880,
      "base_seconds_estimate": 172800,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    },
    {
      "name": "T3 Nuclear Uranium Mining Laser",
      "ore": "Uranium",
      "tier": 3,
      "variant": "Nuclear",
      "components_each": 9,
      "quantity_status": "verified",
      "frame": "Titanium Steel Frame",
      "board": "Gold-Plated Circuit Board",
      "mining_rate_m3_s": 0.26,
      "fuel_cartridge_pct_per_min": 15,
      "fabrication_fee_estimate_c": 4148.88,
      "fee_status": "estimate from displayed rounded T1 fee; exact displayed rounding may differ",
      "base_fee_c_estimate": 4320,
      "base_seconds_estimate": 259200,
      "time_status": "calculated from verified tier/variant scaling and screenshot times; exact displayed seconds may vary by rounding"
    }
  ],
  "engines": [
    {
      "name": "T1 Engine 1",
      "tier": 1,
      "seconds_per_distance": 30,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 115.25,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 120,
      "base_seconds_estimate": 7200,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Structural Frame": 1,
        "Wiring Bundle": 1,
        "Circuit Board": 1,
        "Pressure Vessel": 1,
        "Heat Sink": 1
      }
    },
    {
      "name": "T1 Engine 2",
      "tier": 1,
      "seconds_per_distance": 27.5,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 345.74,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Structural Frame": 3,
        "Wiring Bundle": 3,
        "Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3
      }
    },
    {
      "name": "T1 Fuel Powered Engine",
      "tier": 1,
      "seconds_per_distance": 25,
      "unfueled_seconds_per_distance": 30,
      "cartridge_pct_per_distance": 2,
      "fabrication_fee_c": 345.74,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 360,
      "base_seconds_estimate": 21600,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Structural Frame": 3,
        "Wiring Bundle": 3,
        "Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3,
        "Ceramic Liner": 2,
        "Sensor Array": 1
      }
    },
    {
      "name": "T2 Engine 1",
      "tier": 2,
      "seconds_per_distance": 25,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 230.5,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 240,
      "base_seconds_estimate": 14400,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Steel Frame": 2,
        "Wiring Bundle": 2,
        "Silver-Plated Circuit Board": 2,
        "Pressure Vessel": 2,
        "Heat Sink": 2,
        "Titanium Brace": 2,
        "Sensor Array": 2
      }
    },
    {
      "name": "T2 Engine 2",
      "tier": 2,
      "seconds_per_distance": 22.5,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 691.49,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Steel Frame": 6,
        "Wiring Bundle": 6,
        "Silver-Plated Circuit Board": 6,
        "Pressure Vessel": 6,
        "Heat Sink": 6,
        "Titanium Brace": 6,
        "Sensor Array": 6
      }
    },
    {
      "name": "T2 Fuel Powered Engine",
      "tier": 2,
      "seconds_per_distance": 20,
      "unfueled_seconds_per_distance": 25,
      "cartridge_pct_per_distance": 4,
      "fabrication_fee_c": 691.49,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 720,
      "base_seconds_estimate": 43200,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Steel Frame": 6,
        "Wiring Bundle": 6,
        "Silver-Plated Circuit Board": 6,
        "Pressure Vessel": 6,
        "Heat Sink": 6,
        "Titanium Brace": 6,
        "Sensor Array": 8,
        "Ceramic Liner": 4
      }
    },
    {
      "name": "T3 Engine 1",
      "tier": 3,
      "seconds_per_distance": 20,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 460.99,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 480,
      "base_seconds_estimate": 28800,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Titanium Steel Frame": 3,
        "Wiring Bundle": 3,
        "Gold-Plated Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3,
        "Titanium Brace": 3,
        "Sensor Array": 3,
        "Radiation Shield": 3,
        "Composite Panel": 3
      }
    },
    {
      "name": "T3 Engine 2",
      "tier": 3,
      "seconds_per_distance": 17.5,
      "unfueled_seconds_per_distance": null,
      "cartridge_pct_per_distance": 0,
      "fabrication_fee_c": 1382.98,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Titanium Steel Frame": 9,
        "Wiring Bundle": 9,
        "Gold-Plated Circuit Board": 9,
        "Pressure Vessel": 9,
        "Heat Sink": 9,
        "Titanium Brace": 9,
        "Sensor Array": 9,
        "Radiation Shield": 9,
        "Composite Panel": 9
      }
    },
    {
      "name": "T3 Fuel Powered Engine",
      "tier": 3,
      "seconds_per_distance": 15,
      "unfueled_seconds_per_distance": 20,
      "cartridge_pct_per_distance": 6,
      "fabrication_fee_c": 1382.98,
      "status": "screenshots verified; fee may have rounding difference",
      "base_fabrication_fee_c_estimate": 1440,
      "base_seconds_estimate": 86400,
      "time_status": "derived from screenshot fabrication times; rounded display may differ by one second",
      "inputs_items": {
        "Titanium Steel Frame": 9,
        "Wiring Bundle": 9,
        "Gold-Plated Circuit Board": 9,
        "Pressure Vessel": 9,
        "Heat Sink": 9,
        "Titanium Brace": 9,
        "Sensor Array": 12,
        "Radiation Shield": 9,
        "Composite Panel": 9,
        "Ceramic Liner": 6
      }
    }
  ],
  "stations": [
    {
      "name": "Directorate HQ",
      "coordinates": [
        0,
        0
      ],
      "facilities": [
        "Inventory",
        "Refining",
        "Printing",
        "Fabrication",
        "Contracts",
        "Market",
        "Ships",
        "Shipyard"
      ]
    },
    {
      "name": "Neutron Confluence Iron Outpost",
      "coordinates": [
        -21,
        46
      ],
      "facilities": [
        "Inventory",
        "Refining",
        "Ships"
      ]
    },
    {
      "name": "Beacon Refining Outpost",
      "coordinates": [
        -8,
        -13
      ],
      "facilities": [
        "Inventory",
        "Refining",
        "Ships"
      ]
    },
    {
      "name": "Traverse Storage Outpost",
      "coordinates": [
        -7,
        8
      ],
      "facilities": [
        "Inventory",
        "Ships"
      ]
    },
    {
      "name": "Nebula Bastion Refining Outpost",
      "coordinates": [
        8,
        8
      ],
      "facilities": [
        "Inventory",
        "Refining",
        "Printing",
        "Ships"
      ]
    }
  ],
  "other_fabrication": {
    "Drone Bays": {
      "T1 Bay 1": {
        "capacity": 1,
        "quantity": 1
      },
      "T1 Bay 2": {
        "capacity": 2,
        "quantity": 3
      },
      "T2 Bay 1": {
        "capacity": 3,
        "quantity": 2
      },
      "T2 Bay 2": {
        "capacity": 4,
        "quantity": 6
      },
      "T3 Bay 1": {
        "capacity": 5,
        "quantity": 3
      },
      "T3 Bay 2": {
        "capacity": 6,
        "quantity": 9
      }
    },
    "Utility Equipment": {
      "Cargo Expansion": {
        "tiers": [
          1,
          2,
          3
        ],
        "effects": "Doubles cargo slot depth; +50% travel time"
      },
      "Auxiliary Fuel Tank": {
        "tiers": [
          1,
          2,
          3
        ],
        "effects": "+100% base fuel capacity per tank; +10% travel time per tank"
      }
    },
    "Drones": {
      "Speed": {
        "cargo_m3": [
          20,
          25,
          30
        ],
        "seconds_per_distance": [
          90,
          75,
          50
        ],
        "fuel_m3_per_distance": [
          0.05,
          0.1,
          0.15
        ]
      },
      "Capacity": {
        "cargo_m3": [
          35,
          45,
          65
        ],
        "seconds_per_distance": [
          120,
          100,
          86
        ],
        "fuel_m3_per_distance": [
          0.1,
          0.2,
          0.3
        ]
      },
      "Disposable Delivery": {
        "cargo_m3": 50,
        "seconds_per_distance": 60,
        "fuel_m3_per_distance": 0.05
      }
    },
    "Station Equipment": {
      "Radar": {
        "radius": 5,
        "nuclear_cartridges": 5,
        "hours_per_cartridge": 48,
        "recoverable": false
      },
      "Claim Anchor": {
        "fuel_capacity_m3": 30,
        "fuel_m3_per_hour": 5,
        "recoverable": true
      }
    }
  },
  "mechanics": {
    "market_fee_fraction": 0.02,
    "industrialist_rank": 2,
    "industrialist_multiplier": 0.9604,
    "printer_speed_bonus": 0.02,
    "fabricator_speed_bonus": 0.02,
    "refiner_speed_bonus": 0.06,
    "shipwright_speed_bonus": 0.1,
    "project_inactivity_days": 7,
    "asteroid_discovery_chance": 0.3333333333333333,
    "asteroid_refresh_hours": 24,
    "captain_ship_tier": {
      "T1": 0,
      "T2": 10,
      "T3": 20
    },
    "drone_operator_max_drones": {
      "0-9": 2,
      "10-19": 3,
      "20+": 4
    },
    "travel_distance": "Euclidean distance (inferred from examples)",
    "boomerang": "Unpiloted; empty reposition between stations, carries station materials to projects only; exempt drone limit",
    "porter": "Unpiloted remote shuttle; exempt drone limit",
    "ship_control": "Only one piloted ship at a time"
  },
  "talent_definitions": [
    [
      "Piloting",
      "ship speed",
      2.5,
      "percent",
      false
    ],
    [
      "Drone Operator",
      "drone speed",
      2.5,
      "percent",
      false
    ],
    [
      "Iron Miner",
      "Iron mining output",
      2,
      "percent",
      false
    ],
    [
      "Copper Miner",
      "Copper mining output",
      2,
      "percent",
      false
    ],
    [
      "Silicon Miner",
      "Silicon mining output",
      2,
      "percent",
      false
    ],
    [
      "Carbon Miner",
      "Carbon mining output",
      2,
      "percent",
      false
    ],
    [
      "Titanium Miner",
      "Titanium mining output",
      2,
      "percent",
      false
    ],
    [
      "Silver Miner",
      "Silver mining output",
      2,
      "percent",
      false
    ],
    [
      "Gold Miner",
      "Gold mining output",
      2,
      "percent",
      false
    ],
    [
      "Uranium Miner",
      "Uranium mining output",
      2,
      "percent",
      false
    ],
    [
      "Refiner",
      "refining speed",
      2,
      "percent",
      false
    ],
    [
      "Printer",
      "printing speed",
      2,
      "percent",
      false
    ],
    [
      "Fabricator",
      "fabrication speed",
      2,
      "percent",
      false
    ],
    [
      "Shipwright",
      "shipbuilding speed",
      2,
      "percent",
      false
    ],
    [
      "Industrialist",
      "processing fee reduction",
      2,
      "percent",
      true
    ],
    [
      "Cargo Management",
      "ship cargo capacity",
      5,
      "percent",
      false
    ],
    [
      "Drone Logistics",
      "drone carrying capacity",
      1,
      "m3",
      false
    ],
    [
      "Heavy Hauler",
      "cargo expansion penalty reduction",
      5,
      "percent",
      true
    ],
    [
      "Tetris Master",
      "private storage capacity",
      5,
      "percent",
      false
    ],
    [
      "Contract Negotiator",
      "contract rewards",
      5,
      "percent",
      false
    ],
    [
      "Contract Specialist",
      "personal contract slots",
      1,
      "slots",
      false
    ]
  ],
  "character_defaults": {
    "skills": {
      "Captain": 0,
      "Drone Operator": 0
    },
    "talents": {
      "Piloting": 0,
      "Drone Operator": 0,
      "Iron Miner": 0,
      "Copper Miner": 0,
      "Silicon Miner": 0,
      "Carbon Miner": 0,
      "Titanium Miner": 0,
      "Silver Miner": 0,
      "Gold Miner": 0,
      "Uranium Miner": 0,
      "Refiner": 0,
      "Printer": 0,
      "Fabricator": 0,
      "Shipwright": 0,
      "Industrialist": 0,
      "Cargo Management": 0,
      "Drone Logistics": 0,
      "Heavy Hauler": 0,
      "Tetris Master": 0,
      "Contract Negotiator": 0,
      "Contract Specialist": 0
    }
  },
  "fabrication_recipes": [
    {
      "name": "T1 Drone Bay 1",
      "category": "Drone Bays",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 1,
        "Wiring Bundle": 1,
        "Circuit Board": 1,
        "Actuator": 1
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 1 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Drone Bay 2",
      "category": "Drone Bays",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 3,
        "Wiring Bundle": 3,
        "Circuit Board": 3,
        "Actuator": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 2 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Drone Bay 1",
      "category": "Drone Bays",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 2,
        "Wiring Bundle": 2,
        "Silver-Plated Circuit Board": 2,
        "Actuator": 2,
        "Titanium Brace": 2,
        "Sensor Array": 2
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 3 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Drone Bay 2",
      "category": "Drone Bays",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 6,
        "Wiring Bundle": 6,
        "Silver-Plated Circuit Board": 6,
        "Actuator": 6,
        "Titanium Brace": 6,
        "Sensor Array": 6
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 4 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Drone Bay 1",
      "category": "Drone Bays",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 3,
        "Wiring Bundle": 3,
        "Gold-Plated Circuit Board": 3,
        "Actuator": 3,
        "Titanium Brace": 3,
        "Sensor Array": 3,
        "Radiation Shield": 3,
        "Composite Panel": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 5 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Drone Bay 2",
      "category": "Drone Bays",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 9,
        "Wiring Bundle": 9,
        "Gold-Plated Circuit Board": 9,
        "Actuator": 9,
        "Titanium Brace": 9,
        "Sensor Array": 9,
        "Radiation Shield": 9,
        "Composite Panel": 9
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Holds 6 hauling drones.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Speed Drone",
      "category": "Drones",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 1,
        "Wiring Bundle": 1,
        "Circuit Board": 1,
        "Actuator": 1
      },
      "base_fee_c": 120,
      "base_seconds": 7200,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Capacity Drone",
      "category": "Drones",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 1,
        "Wiring Bundle": 1,
        "Circuit Board": 1,
        "Actuator": 1
      },
      "base_fee_c": 120,
      "base_seconds": 7200,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Speed Drone",
      "category": "Drones",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 2,
        "Wiring Bundle": 2,
        "Silver-Plated Circuit Board": 2,
        "Actuator": 2,
        "Titanium Brace": 2,
        "Sensor Array": 2
      },
      "base_fee_c": 240,
      "base_seconds": 14400,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Capacity Drone",
      "category": "Drones",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 2,
        "Wiring Bundle": 2,
        "Silver-Plated Circuit Board": 2,
        "Actuator": 2,
        "Titanium Brace": 2,
        "Sensor Array": 2
      },
      "base_fee_c": 240,
      "base_seconds": 14400,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Speed Drone",
      "category": "Drones",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 3,
        "Wiring Bundle": 3,
        "Gold-Plated Circuit Board": 3,
        "Actuator": 3,
        "Titanium Brace": 3,
        "Sensor Array": 3,
        "Radiation Shield": 3,
        "Composite Panel": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Capacity Drone",
      "category": "Drones",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 3,
        "Wiring Bundle": 3,
        "Gold-Plated Circuit Board": 3,
        "Actuator": 3,
        "Titanium Brace": 3,
        "Sensor Array": 3,
        "Radiation Shield": 3,
        "Composite Panel": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "Disposable Delivery Drone",
      "category": "Drones",
      "tier": 0,
      "inputs_items": {
        "Hull Panel": 1,
        "Circuit Board": 1,
        "Actuator": 1,
        "Heat Sink": 1
      },
      "base_fee_c": 30,
      "base_seconds": 1800,
      "description": "Single-use, 50 m³ cargo; not a reusable hauling drone.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Engine 1",
      "category": "Engines",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 1,
        "Wiring Bundle": 1,
        "Circuit Board": 1,
        "Pressure Vessel": 1,
        "Heat Sink": 1
      },
      "base_fee_c": 120,
      "base_seconds": 7200,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Engine 2",
      "category": "Engines",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 3,
        "Wiring Bundle": 3,
        "Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Fuel Powered Engine",
      "category": "Engines",
      "tier": 1,
      "inputs_items": {
        "Structural Frame": 3,
        "Wiring Bundle": 3,
        "Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3,
        "Ceramic Liner": 2,
        "Sensor Array": 1
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "Requires Fuel Cartridge only if Fuel Powered.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Engine 1",
      "category": "Engines",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 2,
        "Wiring Bundle": 2,
        "Silver-Plated Circuit Board": 2,
        "Pressure Vessel": 2,
        "Heat Sink": 2,
        "Titanium Brace": 2,
        "Sensor Array": 2
      },
      "base_fee_c": 240,
      "base_seconds": 14400,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Engine 2",
      "category": "Engines",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 6,
        "Wiring Bundle": 6,
        "Silver-Plated Circuit Board": 6,
        "Pressure Vessel": 6,
        "Heat Sink": 6,
        "Titanium Brace": 6,
        "Sensor Array": 6
      },
      "base_fee_c": 720,
      "base_seconds": 43200,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Fuel Powered Engine",
      "category": "Engines",
      "tier": 2,
      "inputs_items": {
        "Steel Frame": 6,
        "Wiring Bundle": 6,
        "Silver-Plated Circuit Board": 6,
        "Pressure Vessel": 6,
        "Heat Sink": 6,
        "Titanium Brace": 6,
        "Sensor Array": 8,
        "Ceramic Liner": 4
      },
      "base_fee_c": 720,
      "base_seconds": 43200,
      "description": "Requires Fuel Cartridge only if Fuel Powered.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Engine 1",
      "category": "Engines",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 3,
        "Wiring Bundle": 3,
        "Gold-Plated Circuit Board": 3,
        "Pressure Vessel": 3,
        "Heat Sink": 3,
        "Titanium Brace": 3,
        "Sensor Array": 3,
        "Radiation Shield": 3,
        "Composite Panel": 3
      },
      "base_fee_c": 360,
      "base_seconds": 21600,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Engine 2",
      "category": "Engines",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 9,
        "Wiring Bundle": 9,
        "Gold-Plated Circuit Board": 9,
        "Pressure Vessel": 9,
        "Heat Sink": 9,
        "Titanium Brace": 9,
        "Sensor Array": 9,
        "Radiation Shield": 9,
        "Composite Panel": 9
      },
      "base_fee_c": 1080,
      "base_seconds": 64800,
      "description": "No fuel required.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Fuel Powered Engine",
      "category": "Engines",
      "tier": 3,
      "inputs_items": {
        "Titanium Steel Frame": 9,
        "Wiring Bundle": 9,
        "Gold-Plated Circuit Board": 9,
        "Pressure Vessel": 9,
        "Heat Sink": 9,
        "Titanium Brace": 9,
        "Sensor Array": 12,
        "Radiation Shield": 9,
        "Composite Panel": 9,
        "Ceramic Liner": 6
      },
      "base_fee_c": 1080,
      "base_seconds": 64800,
      "description": "Requires Fuel Cartridge only if Fuel Powered.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Cargo Expansion",
      "category": "Utility Equipment",
      "tier": 1,
      "inputs_items": {
        "Hull Panel": 10,
        "Structural Frame": 10,
        "Titanium Brace": 10,
        "Composite Panel": 5,
        "Actuator": 5
      },
      "base_fee_c": 1440,
      "base_seconds": 86400,
      "description": "Utility slot equipment. Doubles cargo slot depth, +50% travel time.",
      "status": "screenshot verified"
    },
    {
      "name": "T1 Auxiliary Fuel Tank",
      "category": "Utility Equipment",
      "tier": 1,
      "inputs_items": {
        "Hull Panel": 10,
        "Structural Frame": 10,
        "Titanium Brace": 10,
        "Composite Panel": 5,
        "Actuator": 5
      },
      "base_fee_c": 1440,
      "base_seconds": 86400,
      "description": "Utility slot equipment. Adds 100% base fuel capacity and +10% travel time per tank.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Cargo Expansion",
      "category": "Utility Equipment",
      "tier": 2,
      "inputs_items": {
        "Hull Panel": 20,
        "Steel Frame": 20,
        "Titanium Brace": 20,
        "Composite Panel": 10,
        "Actuator": 10
      },
      "base_fee_c": 2880,
      "base_seconds": 172800,
      "description": "Utility slot equipment. Doubles cargo slot depth, +50% travel time.",
      "status": "screenshot verified"
    },
    {
      "name": "T2 Auxiliary Fuel Tank",
      "category": "Utility Equipment",
      "tier": 2,
      "inputs_items": {
        "Hull Panel": 20,
        "Steel Frame": 20,
        "Titanium Brace": 20,
        "Composite Panel": 10,
        "Actuator": 10
      },
      "base_fee_c": 2880,
      "base_seconds": 172800,
      "description": "Utility slot equipment. Adds 100% base fuel capacity and +10% travel time per tank.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Cargo Expansion",
      "category": "Utility Equipment",
      "tier": 3,
      "inputs_items": {
        "Hull Panel": 30,
        "Titanium Steel Frame": 30,
        "Titanium Brace": 30,
        "Composite Panel": 15,
        "Actuator": 15
      },
      "base_fee_c": 4320,
      "base_seconds": 259200,
      "description": "Utility slot equipment. Doubles cargo slot depth, +50% travel time.",
      "status": "screenshot verified"
    },
    {
      "name": "T3 Auxiliary Fuel Tank",
      "category": "Utility Equipment",
      "tier": 3,
      "inputs_items": {
        "Hull Panel": 30,
        "Titanium Steel Frame": 30,
        "Titanium Brace": 30,
        "Composite Panel": 15,
        "Actuator": 15
      },
      "base_fee_c": 4320,
      "base_seconds": 259200,
      "description": "Utility slot equipment. Adds 100% base fuel capacity and +10% travel time per tank.",
      "status": "screenshot verified"
    },
    {
      "name": "Radar",
      "category": "Station Equipment",
      "tier": 0,
      "inputs_items": {
        "Hull Panel": 30,
        "Structural Frame": 30,
        "Titanium Brace": 40,
        "Composite Panel": 40,
        "Radiation Shield": 30,
        "Ceramic Liner": 30,
        "Pressure Vessel": 20,
        "Actuator": 30,
        "Wiring Bundle": 40,
        "Circuit Board": 40,
        "Sensor Array": 60,
        "Heat Sink": 25
      },
      "base_fee_c": 4320,
      "base_seconds": 259200,
      "description": "5-distance survey radius; consumes Nuclear Fuel Cartridges; nonrecoverable.",
      "status": "screenshot verified"
    },
    {
      "name": "Claim Anchor",
      "category": "Station Equipment",
      "tier": 0,
      "inputs_items": {
        "Hull Panel": 40,
        "Structural Frame": 30,
        "Titanium Brace": 30,
        "Composite Panel": 30,
        "Radiation Shield": 20,
        "Ceramic Liner": 20,
        "Pressure Vessel": 20,
        "Actuator": 20,
        "Wiring Bundle": 20,
        "Circuit Board": 20,
        "Sensor Array": 8,
        "Heat Sink": 5
      },
      "base_fee_c": 2880,
      "base_seconds": 172800,
      "description": "Reserves asteroid mining; uses 5 m³ fuel/hour; recoverable.",
      "status": "screenshot verified"
    }
  ],
  "drone_specs": [
    {
      "name": "T1 Speed Drone",
      "tier": 1,
      "kind": "Speed",
      "cargo_m3": 20,
      "seconds_per_distance": 90,
      "fuel_m3_per_distance": 0.05,
      "tank_m3": 2
    },
    {
      "name": "T1 Capacity Drone",
      "tier": 1,
      "kind": "Capacity",
      "cargo_m3": 35,
      "seconds_per_distance": 120,
      "fuel_m3_per_distance": 0.1,
      "tank_m3": 2
    },
    {
      "name": "T2 Speed Drone",
      "tier": 2,
      "kind": "Speed",
      "cargo_m3": 25,
      "seconds_per_distance": 75,
      "fuel_m3_per_distance": 0.1,
      "tank_m3": 4
    },
    {
      "name": "T2 Capacity Drone",
      "tier": 2,
      "kind": "Capacity",
      "cargo_m3": 45,
      "seconds_per_distance": 100,
      "fuel_m3_per_distance": 0.2,
      "tank_m3": 4
    },
    {
      "name": "T3 Speed Drone",
      "tier": 3,
      "kind": "Speed",
      "cargo_m3": 30,
      "seconds_per_distance": 50,
      "fuel_m3_per_distance": 0.15,
      "tank_m3": 6
    },
    {
      "name": "T3 Capacity Drone",
      "tier": 3,
      "kind": "Capacity",
      "cargo_m3": 65,
      "seconds_per_distance": 86,
      "fuel_m3_per_distance": 0.3,
      "tank_m3": 6
    }
  ],
  "notes_v2": {
    "drone_model": "Steady-state, round-trip distance, no load/unload delay, continuous refueling, simultaneous drone trips, and no flight congestion. This is a theoretical ceiling, not a guarantee of infinite mining.",
    "talent_math": "Industrialist compounds 0.98^rank; speed bonuses assumed divide baseline duration by (1+bonus). Exact rounding/stacking unverified."
  }
};
