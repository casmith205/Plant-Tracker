/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usda_plant_data_db', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      primaryKey: true
    },
    ScientificName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CommonName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AcceptedSymbol: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Symbol: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    State: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FamilyCommonName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Duration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrowthHabit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NativeStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ActiveGrowthPeriod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FlowerColor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FoliageColor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FoliagePorositySummer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FoliagePorosityWinter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FruitColor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GrowthRate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MaxHeight20Yrs: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MatureHeight: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Lifespan: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ResproutAbility: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdaptedCoarseSoils: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdaptedMediumSoils: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AdaptedFineSoils: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AnaerobicTolerance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DroughtTolerance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MoistureUse: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Precipitation_Minimum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Precipitation_Maximum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    RootDepthMinimum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ShadeTolerance: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TemperatureMinimum: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    BloomPeriod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PalatableBrowseAnimal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PalatableGrazeAnimal: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PalatableHuman: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'usda_plant_data_db'
  });
};
